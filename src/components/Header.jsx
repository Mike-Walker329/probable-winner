import { platformData } from "../data/platform";
import ThemeToggle from "./ThemeToggle";

const tradeIcons = {
  plumbing: "🔧",
  electrical: "⚡",
  cleaning: "🧹",
  landscaping: "🌿",
};

export default function Header({ view, onChangeView, activeTrade, onSelectTrade, shortlistCount }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-brand" onClick={() => onChangeView("dashboard")} role="button" tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onChangeView("dashboard")}>
          <div className="brand-icon">AI</div>
          <div className="brand-text">
            <h1>{platformData.platform.name}</h1>
            <p>{platformData.platform.description}</p>
          </div>
        </div>

        <div className="header-actions">
          {shortlistCount > 0 && (
            <span className="shortlist-badge" title="Saved solutions">
              ⭐ {shortlistCount}
            </span>
          )}
          <ThemeToggle />
        </div>
      </div>

      <nav className="header-nav">
        <button
          className={"nav-pill " + (view === "dashboard" ? "active" : "")}
          onClick={() => onChangeView("dashboard")}
        >
          Dashboard
        </button>
        {platformData.trades.map((trade) => (
          <button
            key={trade}
            className={"nav-pill " + (view === "explorer" && activeTrade === trade ? "active" : "")}
            onClick={() => onSelectTrade(trade)}
          >
            <span className="trade-icon">{tradeIcons[trade]}</span>
            <span className="trade-label">{trade.charAt(0).toUpperCase() + trade.slice(1)}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}
