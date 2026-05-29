// Search + filter + sort controls for the solution explorer.
export default function FilterBar({ filters, setFilters, technologies, resultCount }) {
  const update = (key, value) => setFilters((f) => ({ ...f, [key]: value }));

  return (
    <div className="filter-bar">
      <div className="filter-search">
        <span className="filter-search-icon" aria-hidden="true">\uD83D\uDD0D</span>
        <input
          type="search"
          placeholder="Search pain points, solutions, or tech..."
          value={filters.query}
          onChange={(e) => update("query", e.target.value)}
          aria-label="Search solutions"
        />
      </div>

      <div className="filter-controls">
        <label className="filter-select">
          <span>Complexity</span>
          <select value={filters.complexity} onChange={(e) => update("complexity", e.target.value)}>
            <option value="all">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <label className="filter-select">
          <span>Technology</span>
          <select value={filters.tech} onChange={(e) => update("tech", e.target.value)}>
            <option value="all">All</option>
            {technologies.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="filter-select">
          <span>Sort by</span>
          <select value={filters.sort} onChange={(e) => update("sort", e.target.value)}>
            <option value="priority">Priority (quick wins)</option>
            <option value="roi">Highest ROI</option>
            <option value="speed">Fastest to value</option>
          </select>
        </label>
      </div>

      <span className="filter-count">{resultCount} match{resultCount === 1 ? "" : "es"}</span>
    </div>
  );
}
