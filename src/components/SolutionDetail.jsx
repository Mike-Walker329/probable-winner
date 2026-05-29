import { useEffect, useRef } from "react";
import ComplexityBadge from "./ComplexityBadge";
import WorkflowDiagram from "./WorkflowDiagram";
import ROICard from "./ROICard";
import ROICalculator from "./ROICalculator";

export default function SolutionDetail({ solution, onClose, shortlist }) {
  const modalRef = useRef(null);
  const saved = shortlist?.has(solution.solutionId);

  // Accessibility: close on Escape, lock body scroll, and focus the modal.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div className="solution-overlay" onClick={onClose}>
      <div
        className="solution-modal"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={solution.name}
      >
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
            <button
              className={"save-btn-lg " + (saved ? "saved" : "")}
              onClick={() => shortlist?.toggle(solution.solutionId)}
              aria-pressed={saved}
            >
              {saved ? "⭐ Saved" : "☆ Save"}
            </button>
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
          <ROICalculator solution={solution} />
        </div>
      </div>
    </div>
  );
}
