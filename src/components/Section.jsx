import React from "react";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16">
      <div className="container-lg">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
