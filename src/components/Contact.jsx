import React from "react";
import Section from "./Section";
import Card from "./Card";
import { profile } from "../data/content";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is a static demo. Connect to a backend or use Formspree/EmailJS to receive messages.");
  };
  return (
    <Section id="contact" title="Connect With Me">
      <div className="grid md:grid-cols-2 gap-5">
        <Card>
          <form onSubmit={handleSubmit} className="grid gap-3">
            <input className="border rounded-xl px-3 py-2" placeholder="Name" required />
            <input type="email" className="border rounded-xl px-3 py-2" placeholder="Email" required />
            <input className="border rounded-xl px-3 py-2" placeholder="Subject" />
            <textarea rows="4" className="border rounded-xl px-3 py-2" placeholder="Message"></textarea>
            <button className="btn-primary w-max">Send Message</button>
          </form>
        </Card>
        <Card>
         <h2 className="text-xl font-bold">Get in Touch</h2>
          <p className="mt-3">I’d love to hear from you — whether it’s a project, job opportunity, or just a chat.</p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li><strong>Email:</strong> {profile.mail}</li>
            <li><strong>Phone:</strong> {profile.phone}</li>
            <li><strong>Location:</strong> {profile.location}</li>
          </ul>
          <div className="mt-4">
           <a href="https://github.com/roshani-gaund">Github Profile</a>
          </div>
          <div className="mt-4">
         
              <a href="https://linkedin.com/in/roshani-gaund-0a8152306"  >Linked In</a>
              </div>
        </Card>
      </div>
    </Section>
  );
}
