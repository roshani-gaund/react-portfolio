import React from "react";
import Section from "./Section";
import Card from "./Card";
import { education } from "../data/content";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid md:grid-cols-2 gap-4">
        {education.map((e) => (
          <Card key={e.school}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{e.degree}</h3>
                <p className="text-slate-600">{e.school}</p>
              </div>
              <span className="chip">{e.period}</span>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700">
              {e.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
