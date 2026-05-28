import ComplexityBadge from "./ComplexityBadge";
import WorkflowDiagram from "./WorkflowDiagram";
import ROICard from "./ROICard";

export default function SolutionDetail({ solution, onClose }) {
  return (
    <div className="solution-overlay" onClick={onClose}>
      <div className="solution-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-header">
          <span className="solution-id-tag">{solution.solutionId}</span>
          <h2 className="modal-title">{solution.name}</h2>
          <p className="modal-desc">{solution.description}</p>

          <div className="modal-meta">
            <div className="meta-item">
              <span className="meta-label">Complexity</span>
              <ComplexityBadge level={solution.implementationComplexity} />
            </div>
            <div className="meta-item">
              <span className="meta-label">Time to Value</span>
              <span className="meta-value">{solution.timeToValue}</span>
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="tech-section">
            <h4 className="tech-title">AI Technologies</h4>
            <div className="tech-tags">
              {solution.aiTechnologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <WorkflowDiagram workflow={solution.workflow} />
          <ROICard roi={solution.roi} />
        </div>
      </div>
    </div>
  );
}
