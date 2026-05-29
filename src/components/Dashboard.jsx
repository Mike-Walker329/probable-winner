import { useMemo } from "react";
import { platformData } from "../data/platform";
import {
  flattenSolutions,
  priorityScore,
  priorityLabel,
  rangeMidpoint,
  firstNumber,
} from "../utils/scoring";
import ComplexityBadge from "./ComplexityBadge";

const tradeIcons = { plumbing: "\uD83D\uDD27", electrical: "\u26A1", cleaning: "\uD83E\uDDF9", landscaping: "\uD83C\uDF3F" };

// ServiceTitan-style landing dashboard: aggregate KPIs across all trades plus
// the highest-priority "quick win" solutions, so the user sees value at a glance.
export default function Dashboard({ onExplore, onOpenSolution }) {
  const { painPoints, trades } = platformData;

  const stats = useMemo(() => {
    const solutions = flattenSolutions(painPoints);
    const avgRoi = Math.round(
      solutions.reduce((a, s) => a + rangeMidpoint(s.roi?.monthlyROI), 0) / solutions.length
    );
    const totalUpside = solutions.reduce(
      (a, s) => a + firstNumber(s.roi?.monthlyRevenue || s.roi?.monthlyRecurring),
      0
    );
    const quickWins = [...solutions].sort((a, b) => priorityScore(b) - priorityScore(a)).slice(0, 4);
    return {
      painPointCount: painPoints.length,
      solutionCount: solutions.length,
      tradeCount: trades.length,
      avgRoi,
      totalUpside,
      quickWins,
    };
  }, [painPoints, trades]);

  const money = (n) =>
    "$" + Math.round(n).toLocaleString("en-US");

  return (
    <div className="dashboard">
      <div className="dash-hero">
        <h2 className="dash-title">AI Opportunity Dashboard</h2>
        <p className="dash-subtitle">
          Your map of where AI can win across {stats.tradeCount} home-service trades.
        </p>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <span className="kpi-value">{stats.tradeCount}</span>
          <span className="kpi-label">Trades Covered</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-value">{stats.painPointCount}</span>
          <span className="kpi-label">Pain Points Mapped</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-value">{stats.solutionCount}</span>
          <span className="kpi-label">AI Solutions</span>
        </div>
        <div className="kpi-card accent">
          <span className="kpi-value">{stats.avgRoi}%</span>
          <span className="kpi-label">Avg. Monthly ROI</span>
        </div>
        <div className="kpi-card accent">
          <span className="kpi-value">{money(stats.totalUpside)}+</span>
          <span className="kpi-label">Combined Monthly Upside</span>
        </div>
      </div>

      <div className="dash-section">
        <div className="dash-section-head">
          <h3>Top Quick Wins</h3>
          <span className="dash-section-hint">Highest impact for the lowest effort</span>
        </div>
        <div className="quickwin-grid">
          {stats.quickWins.map((s) => (
            <button
              key={s.solutionId}
              className="quickwin-card"
              onClick={() => onOpenSolution && onOpenSolution(s)}
            >
              <div className="quickwin-top">
                <span className="quickwin-trade">
                  {tradeIcons[s.trade]} {s.trade}
                </span>
                <span className={"priority-pill priority-" + priorityLabel(s).replace(/\s/g, "").toLowerCase()}>
                  {priorityLabel(s)}
                </span>
              </div>
              <h4 className="quickwin-name">{s.name}</h4>
              <p className="quickwin-desc">{s.description}</p>
              <div className="quickwin-foot">
                <ComplexityBadge level={s.implementationComplexity} />
                <span className="quickwin-roi">ROI {s.roi?.monthlyROI}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="dash-cta">
        <button className="primary-btn" onClick={onExplore}>
          Explore all solutions &rarr;
        </button>
      </div>
    </div>
  );
}
