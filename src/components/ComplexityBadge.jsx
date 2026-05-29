const colors = {
  Low: "badge-green",
  Medium: "badge-yellow",
  High: "badge-red",
};

export default function ComplexityBadge({ level }) {
  return <span className={`badge ${colors[level] ?? "badge-gray"}`}>{level}</span>;
}
