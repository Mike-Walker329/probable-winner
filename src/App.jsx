import { useState, useMemo } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import FilterBar from "./components/FilterBar";
import PainPointCard from "./components/PainPointCard";
import SolutionDetail from "./components/SolutionDetail";
import { ThemeProvider } from "./components/ThemeToggle";
import useShortlist from "./hooks/useShortlist";
import { platformData } from "./data/platform";
import {
  allTechnologies,
  priorityScore,
  rangeMidpoint,
  firstNumber,
} from "./utils/scoring";
import "./App.css";

const DEFAULT_FILTERS = { query: "", complexity: "all", tech: "all", sort: "priority" };

export default function App() {
  const [view, setView] = useState("dashboard");
  const [activeTrade, setActiveTrade] = useState("plumbing");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [modalSolution, setModalSolution] = useState(null);
  const shortlist = useShortlist();

  const technologies = useMemo(() => allTechnologies(platformData.painPoints), []);

  const visiblePainPoints = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return platformData.painPoints
      .filter((pp) => pp.trade === activeTrade)
      .map((pp) => {
        const matchingSolutions = pp.solutions.filter((s) => {
          if (filters.complexity !== "all" && s.implementationComplexity !== filters.complexity)
            return false;
          if (filters.tech !== "all" && !(s.aiTechnologies || []).includes(filters.tech))
            return false;
          if (q) {
            const hay = (
              pp.title + " " + pp.description + " " + s.name + " " + s.description + " " +
              (s.aiTechnologies || []).join(" ")
            ).toLowerCase();
            if (!hay.includes(q)) return false;
          }
          return true;
        });
        return { ...pp, solutions: matchingSolutions };
      })
      .filter((pp) => pp.solutions.length > 0)
      .map((pp) => ({
        ...pp,
        solutions: [...pp.solutions].sort((a, b) => sortSolutions(a, b, filters.sort)),
      }));
  }, [activeTrade, filters]);

  const matchCount = visiblePainPoints.reduce((a, pp) => a + pp.solutions.length, 0);

  return (
    <ThemeProvider>
      <div className="app">
        <Header
          view={view}
          onChangeView={setView}
          activeTrade={activeTrade}
          onSelectTrade={(t) => {
            setActiveTrade(t);
            setView("explorer");
          }}
          shortlistCount={shortlist.count}
        />

        <main className="main-content">
          {view === "dashboard" ? (
            <Dashboard
              onExplore={() => setView("explorer")}
              onOpenSolution={(s) => setModalSolution(s)}
            />
          ) : (
            <>
              <div className="trade-overview">
                <h2 className="trade-headline">
                  <span className="trade-name">{capitalize(activeTrade)}</span> &mdash; AI Opportunity Map
                </h2>
                <p className="trade-subline">
                  {matchCount > 0
                    ? matchCount + " AI solution" + (matchCount !== 1 ? "s" : "") + " match your view"
                    : "No solutions match your filters yet. Try clearing them."}
                </p>
              </div>

              <FilterBar
                filters={filters}
                setFilters={setFilters}
                technologies={technologies}
                resultCount={matchCount}
              />

              <div className="pain-points-list">
                {visiblePainPoints.map((pp) => (
                  <PainPointCard
                    key={pp.id}
                    painPoint={pp}
                    shortlist={shortlist}
                    onOpenSolution={(s) => setModalSolution(s)}
                  />
                ))}

                {visiblePainPoints.length === 0 && (
                  <div className="empty-state">
                    <div className="empty-icon">🔎</div>
                    <h3>No matches</h3>
                    <p>Nothing fits these filters for {capitalize(activeTrade)}. Adjust your search.</p>
                  </div>
                )}
              </div>
            </>
          )}
        </main>

        {modalSolution && (
          <SolutionDetail
            solution={modalSolution}
            onClose={() => setModalSolution(null)}
            shortlist={shortlist}
          />
        )}

        <footer className="site-footer">
          <p>Home Service AI Integration Platform &middot; v{platformData.platform.version}</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

function sortSolutions(a, b, mode) {
  if (mode === "roi") return rangeMidpoint(b.roi?.monthlyROI) - rangeMidpoint(a.roi?.monthlyROI);
  if (mode === "speed") return firstNumber(a.timeToValue) - firstNumber(b.timeToValue);
  return priorityScore(b) - priorityScore(a);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
