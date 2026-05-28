import { useState } from "react";
import ComplexityBadge from "./ComplexityBadge";
import SolutionDetail from "./SolutionDetail";

export default function PainPointCard({ painPoint }) {
  const [expanded, setExpanded] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null);

  const impactEntries = Object.entries(painPoint.businessImpact);

  return (
    <>
      <div className={`pain-card ${expanded ? "expanded" : ""}`}>
        <div className="pain-card-header" onClick={() => setExpanded((v) => !v)}>
          <div className="pain-card-top">
            <span className="pain-id">{painPoint.id}</span>
            <span className="chevron">{expanded ? "▲" : "▼"}</span>
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
                {painPoint.solutions.map((sol) => (
                  <div
                    key={sol.solutionId}
                    className="solution-card"
                    onClick={() => setSelectedSolution(sol)}
                  >
                    <div className="solution-card-top">
                      <span className="solution-card-id">{sol.solutionId}</span>
                      <ComplexityBadge level={sol.implementationComplexity} />
                    </div>
                    <h5 className="solution-card-name">{sol.name}</h5>
                    <p className="solution-card-desc">{sol.description}</p>
                    <div className="solution-card-footer">
                      <span className="time-tag">⏱ {sol.timeToValue}</span>
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
                    <button className="view-solution-btn">View Full Solution →</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedSolution && (
        <SolutionDetail
          solution={selectedSolution}
          onClose={() => setSelectedSolution(null)}
        />
      )}
    </>
  );
}

function formatKey(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}
