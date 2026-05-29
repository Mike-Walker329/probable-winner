import { useState, useEffect, useCallback } from "react";

const KEY = "hsai-shortlist";

// Persists the set of saved solution IDs to localStorage so a user's
// shortlist survives refresh. This is the seed of the future "pipeline" / deal
// board when this grows into a full CRM.
export default function useShortlist() {
  const [ids, setIds] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(ids));
  }, [ids]);

  const toggle = useCallback((id) => {
    setIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  const has = useCallback((id) => ids.includes(id), [ids]);

  const clear = useCallback(() => setIds([]), []);

  return { ids, toggle, has, clear, count: ids.length };
}
