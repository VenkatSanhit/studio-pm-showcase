import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & { featured?: boolean };

const CardMono: React.FC<Props> = ({ children, featured = false, className = "", ...props }) => {
  return (
    <div {...props} className={`mono-card border-border p-4 ${className}`}>
      {featured && <div style={{ height: 4, background: "hsl(var(--accent))" }} className="-mx-4 mt-0" />}
      <div className="mt-3">{children}</div>
    </div>
  );
};

export default CardMono;
