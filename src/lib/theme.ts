export const THEME_KEY = "site-theme";
export type Theme = "cinema" | "mono";

export function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_KEY) as Theme | null;
    if (stored) return stored;
  } catch (e) {
    /* ignore */
  }
  // default to mono (new premium)
  return "mono";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "mono") {
    root.classList.add("theme-mono");
  } else {
    root.classList.remove("theme-mono");
  }
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {}
}
