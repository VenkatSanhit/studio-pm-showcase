import React from "react";
import CardMono from "./CardMono";

const studies = [
  {
    title: "AI Infrastructure Observability",
    role: "Product + Strategy",
    summary: "Built observability primitives and cost-aware telemetry for large-scale model ops. Reduced infra spend by 23% while improving SLA.",
    link: "#"
  },
  {
    title: "Design System for Platform UX",
    role: "Design Systems",
    summary: "Engineered a token-driven design system and component library adopted across 6 products.",
    link: "#"
  }
];

const CaseStudiesMono: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {studies.map((s) => (
        <CardMono key={s.title} className="p-6" >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <div className="text-sm font-mono text-muted-foreground">{s.role}</div>
            </div>
            <div>
              <a className="text-sm font-mono border border-border px-3 py-1" href={s.link}>Read</a>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{s.summary}</p>
        </CardMono>
      ))}
    </div>
  );
};

export default CaseStudiesMono;
