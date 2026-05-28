import { platformData } from "../data/platform";

const tradeIcons = {
  plumbing: "🔧",
  electrical: "⚡",
  cleaning: "🧹",
  landscaping: "🌿",
};

export default function Header({ activeTrade, onSelectTrade }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-brand">
          <div className="brand-icon">AI</div>
          <div className="brand-text">
            <h1>{platformData.platform.name}</h1>
            <p>{platformData.platform.description}</p>
          </div>
        </div>
        <nav className="trade-nav">
          {platformData.trades.map((trade) => (
            <button
              key={trade}
              className={`trade-tab ${activeTrade === trade ? "active" : ""}`}
              onClick={() => onSelectTrade(trade)}
            >
              <span className="trade-icon">{tradeIcons[trade]}</span>
              <span className="trade-label">{trade.charAt(0).toUpperCase() + trade.slice(1)}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
