// Scoring + parsing helpers used across the platform.
// Turns the free-text ROI/complexity fields into numbers we can rank and visualize.

const COMPLEXITY_SCORE = { Low: 1, Medium: 2, High: 3 };

// Pull the first number out of a string like "$3,000-16,000" or "200-1,000%".
export function firstNumber(str) {
  if (typeof str === "number") return str;
  if (!str) return 0;
  const m = String(str).replace(/,/g, "").match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : 0;
}

// Average of the first two numbers in a range string, e.g. "200-1,000%" -> 600.
export function rangeMidpoint(str) {
  if (!str) return 0;
  const nums = String(str).replace(/,/g, "").match(/-?\d+(\.\d+)?/g);
  if (!nums) return 0;
  if (nums.length === 1) return parseFloat(nums[0]);
  return (parseFloat(nums[0]) + parseFloat(nums[1])) / 2;
}

// Effort score: lower complexity + faster time-to-value = lower effort (good).
export function effortScore(solution) {
  const complexity = COMPLEXITY_SCORE[solution.implementationComplexity] ?? 2;
  const weeks = firstNumber(solution.timeToValue) || 3;
  return complexity * 2 + Math.min(weeks, 8);
}

// Impact score: midpoint of monthly ROI percentage.
export function impactScore(solution) {
  const roi = solution.roi || {};
  return rangeMidpoint(roi.monthlyROI);
}

// Priority = impact relative to effort. Higher = better "quick win".
export function priorityScore(solution) {
  const impact = impactScore(solution);
  const effort = effortScore(solution) || 1;
  return Math.round((impact / effort) * 10) / 10;
}

export function priorityLabel(solution) {
  const p = priorityScore(solution);
  if (p >= 60) return "Quick Win";
  if (p >= 30) return "Strategic";
  return "Long Game";
}

// Collect a de-duplicated, sorted list of every AI technology in the data.
export function allTechnologies(painPoints) {
  const set = new Set();
  painPoints.forEach((pp) =>
    pp.solutions.forEach((s) => (s.aiTechnologies || []).forEach((t) => set.add(t)))
  );
  return [...set].sort();
}

// Flatten every solution with its parent pain point for dashboard ranking.
export function flattenSolutions(painPoints) {
  const out = [];
  painPoints.forEach((pp) =>
    pp.solutions.forEach((s) =>
      out.push({ ...s, trade: pp.trade, painPointId: pp.id, painPointTitle: pp.title })
    )
  );
  return out;
}
