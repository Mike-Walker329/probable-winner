import { useState, useMemo } from "react";
import { firstNumber } from "../utils/scoring";

// Interactive, HubSpot-style ROI calculator. The user plugs in their own
// numbers and sees a personalized monthly/annual return for this solution,
// instead of relying only on the generic ranges in the data.
export default function ROICalculator({ solution }) {
  const defaultJobValue = Math.round(firstNumber(solution?.roi?.jobValue) || 500);
  const defaultImplCost = Math.round(firstNumber(solution?.roi?.implementationCost) || 1500);

  const [jobsPerMonth, setJobsPerMonth] = useState(8);
  const [jobValue, setJobValue] = useState(defaultJobValue);
  const [recoveryRate, setRecoveryRate] = useState(20);
  const [implCost, setImplCost] = useState(defaultImplCost);
  const [monthlyCost, setMonthlyCost] = useState(150);

  const result = useMemo(() => {
    const recovered = jobsPerMonth * (recoveryRate / 100);
    const monthlyGain = recovered * jobValue;
    const netMonthly = monthlyGain - monthlyCost;
    const annualNet = netMonthly * 12 - implCost;
    const paybackMonths = netMonthly > 0 ? implCost / netMonthly : null;
    const roiPct = monthlyCost + implCost / 12 > 0
      ? (netMonthly / (monthlyCost + implCost / 12)) * 100
      : 0;
    return { recovered, monthlyGain, netMonthly, annualNet, paybackMonths, roiPct };
  }, [jobsPerMonth, jobValue, recoveryRate, implCost, monthlyCost]);

  const money = (n) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="roi-calc">
      <h4 className="roi-calc-title">Calculate Your ROI</h4>
      <p className="roi-calc-sub">Adjust the numbers to match your business.</p>

      <div className="roi-calc-grid">
        <label className="roi-field">
          <span>Relevant jobs / leads per month</span>
          <input type="number" min="0" value={jobsPerMonth}
            onChange={(e) => setJobsPerMonth(Number(e.target.value))} />
        </label>
        <label className="roi-field">
          <span>Average job value ($)</span>
          <input type="number" min="0" value={jobValue}
            onChange={(e) => setJobValue(Number(e.target.value))} />
        </label>
        <label className="roi-field">
          <span>Improvement from AI (%)</span>
          <input type="number" min="0" max="100" value={recoveryRate}
            onChange={(e) => setRecoveryRate(Number(e.target.value))} />
        </label>
        <label className="roi-field">
          <span>One-time setup cost ($)</span>
          <input type="number" min="0" value={implCost}
            onChange={(e) => setImplCost(Number(e.target.value))} />
        </label>
        <label className="roi-field">
          <span>Monthly tool cost ($)</span>
          <input type="number" min="0" value={monthlyCost}
            onChange={(e) => setMonthlyCost(Number(e.target.value))} />
        </label>
      </div>

      <div className="roi-calc-results">
        <div className="roi-result-card highlight">
          <span className="roi-result-label">Net monthly gain</span>
          <span className="roi-result-value">{money(result.netMonthly)}</span>
        </div>
        <div className="roi-result-card">
          <span className="roi-result-label">First-year net</span>
          <span className="roi-result-value">{money(result.annualNet)}</span>
        </div>
        <div className="roi-result-card">
          <span className="roi-result-label">Payback period</span>
          <span className="roi-result-value">
            {result.paybackMonths ? result.paybackMonths.toFixed(1) + " mo" : "—"}
          </span>
        </div>
        <div className="roi-result-card">
          <span className="roi-result-label">Monthly ROI</span>
          <span className="roi-result-value">{Math.round(result.roiPct)}%</span>
        </div>
      </div>

      <p className="roi-calc-note">
        Estimates only. Based on {result.recovered.toFixed(1)} extra jobs/month from this solution.
      </p>
    </div>
  );
}
