import React from "react";
import Section from "./Section";
import Card from "./Card";
import Badge from "./Badge";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <Card key={p.title} className="p-0 overflow-hidden">
            <img className="w-full h-60 object-cover" src={p.image} alt={p.title} />
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-1 text-slate-600">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => <Badge key={t}>{t}</Badge>)}
              </div>
              <div className="mt-4 flex gap-3">
                {p.links.map((l) => (
                  <a key={l.label} className="btn-outline" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
