import { useState } from "react";
import Header from "./components/Header";
import PainPointCard from "./components/PainPointCard";
import { platformData } from "./data/platform";
import "./App.css";

export default function App() {
  const [activeTrade, setActiveTrade] = useState("plumbing");

  const visiblePainPoints = platformData.painPoints.filter(
    (pp) => pp.trade === activeTrade
  );

  return (
    <div className="app">
      <Header activeTrade={activeTrade} onSelectTrade={setActiveTrade} />

      <main className="main-content">
        <div className="trade-overview">
          <h2 className="trade-headline">
            <span className="trade-name">{capitalize(activeTrade)}</span> — AI Opportunity Map
          </h2>
          <p className="trade-subline">
            {visiblePainPoints.length > 0
              ? `${visiblePainPoints.length} pain point${visiblePainPoints.length !== 1 ? "s" : ""} identified · Click any card to explore AI solutions`
              : "No pain points mapped for this trade yet. Check back soon."}
          </p>
        </div>

        <div className="pain-points-list">
          {visiblePainPoints.map((pp) => (
            <PainPointCard key={pp.id} painPoint={pp} />
          ))}

          {visiblePainPoints.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">🚧</div>
              <h3>Coming Soon</h3>
              <p>We're mapping AI solutions for {capitalize(activeTrade)}. Check back soon.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="site-footer">
        <p>
          Home Service AI Integration Platform &nbsp;·&nbsp; v{platformData.platform.version}
        </p>
      </footer>
    </div>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
