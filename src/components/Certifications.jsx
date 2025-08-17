import React from "react";
import Section from "./Section";
import Card from "./Card";
import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid md:grid-cols-3 gap-4">
        {certifications.map((c) => (
          <Card key={c.name} className="border-l-4 border-brand/70">
            <h3 className="font-semibold">{c.name}</h3>
            <p className="text-slate-600 mt-1">{c.year}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
