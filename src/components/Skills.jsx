import React from "react";
import Section from "./Section";
import Card from "./Card";
import Badge from "./Badge";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <Card>
        <div className="flex flex-wrap gap-4">
          {skills.map((s) => <Badge key={s} >{s}</Badge>)}
        </div>
      </Card>
    </Section>
  );
}
