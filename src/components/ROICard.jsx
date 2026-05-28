export default function ROICard({ roi }) {
  const entries = Object.entries(roi);
  return (
    <div className="roi-card">
      <h4 className="roi-title">Return on Investment</h4>
      <div className="roi-grid">
        {entries.map(([key, value]) => (
          <div key={key} className="roi-item">
            <dt className="roi-key">{formatKey(key)}</dt>
            <dd className="roi-value">{String(value)}</dd>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatKey(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}
