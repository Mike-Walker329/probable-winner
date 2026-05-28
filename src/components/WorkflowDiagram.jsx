export default function WorkflowDiagram({ workflow }) {
  return (
    <div className="workflow-section">
      <h4 className="workflow-title">Automation Workflow</h4>
      <div className="workflow-steps">
        {workflow.steps.map((step, idx) => (
          <div key={step.node} className="workflow-step">
            <div className="step-connector-wrap">
              <div className="step-node">{step.node}</div>
              {idx < workflow.steps.length - 1 && <div className="step-line" />}
            </div>
            <div className="step-content">
              <p className="step-action">{step.action}</p>
              <p className="step-input">{step.input}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="data-flow-bar">
        <span className="data-flow-label">Data Flow</span>
        <span className="data-flow-text">{workflow.dataFlow}</span>
      </div>
    </div>
  );
}
