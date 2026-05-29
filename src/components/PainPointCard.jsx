import { useState } from "react";
import ComplexityBadge from "./ComplexityBadge";
import { priorityLabel } from "../utils/scoring";

export default function PainPointCard({ painPoint, shortlist, onOpenSolution }) {
  const [expanded, setExpanded] = useState(false);

  const impactEntries = Object.entries(painPoint.businessImpact);

  return (
    <div className={"pain-card " + (expanded ? "expanded" : "")}>
      <div className="pain-card-header" onClick={() => setExpanded((v) => !v)}>
        <div className="pain-card-top">
          <span className="pain-id">{painPoint.id}</span>
          <span className="solution-pill">{painPoint.solutions.length} AI solution{painPoint.solutions.length !== 1 ? "s" : ""}</span>
          <span className="chevron">{expanded ? "\u25B2" : "\u25BC"}</span>
        </div>
        <h3 className="pain-title">{painPoint.title}</h3>
        <p className="pain-desc">{painPoint.description}</p>
      </div>

      {expanded && (
        <div className="pain-card-body">
          <div className="root-cause-box">
            <span className="box-label">Root Cause</span>
            <p>{painPoint.rootCause}</p>
          </div>

          <div className="impact-grid">
            {impactEntries.map(([key, val]) => (
              <div key={key} className="impact-item">
                <dt className="impact-key">{formatKey(key)}</dt>
                <dd className="impact-val">{val}</dd>
              </div>
            ))}
          </div>

          <div className="current-tools">
            <span className="box-label">Current Tools</span>
            <ul>
              {painPoint.currentTools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="solutions-section">
            <h4 className="solutions-heading">
              AI Solutions <span className="solutions-count">{painPoint.solutions.length}</span>
            </h4>
            <div className="solution-cards">
              {painPoint.solutions.map((sol) => {
                const saved = shortlist?.has(sol.solutionId);
                return (
                  <div key={sol.solutionId} className="solution-card">
                    <div className="solution-card-top">
                      <span className="solution-card-id">{sol.solutionId}</span>
                      <div className="solution-card-tags">
                        <span className={"priority-pill priority-" + priorityLabel(sol).replace(/\s/g, "").toLowerCase()}>
                          {priorityLabel(sol)}
                        </span>
                        <ComplexityBadge level={sol.implementationComplexity} />
                      </div>
                    </div>
                    <h5 className="solution-card-name">{sol.name}</h5>
                    <p className="solution-card-desc">{sol.description}</p>
                    <div className="solution-card-footer">
                      <span className="time-tag">⏱️ {sol.timeToValue}</span>
                      <span className="roi-tag">📈 ROI: {sol.roi.monthlyROI}</span>
                    </div>
                    <div className="solution-tech-preview">
                      {sol.aiTechnologies.slice(0, 2).map((t) => (
                        <span key={t} className="tech-mini-tag">{t}</span>
                      ))}
                      {sol.aiTechnologies.length > 2 && (
                        <span className="tech-mini-tag">+{sol.aiTechnologies.length - 2} more</span>
                      )}
                    </div>
                    <div className="solution-card-actions">
                      <button className="view-solution-btn" onClick={() => onOpenSolution(sol)}>
                        View Full Solution &rarr;
                      </button>
                      <button
                        className={"save-btn " + (saved ? "saved" : "")}
                        onClick={() => shortlist?.toggle(sol.solutionId)}
                        aria-pressed={saved}
                        title={saved ? "Remove from shortlist" : "Save to shortlist"}
                      >
                        {saved ? "⭐" : "☆"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function formatKey(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}
