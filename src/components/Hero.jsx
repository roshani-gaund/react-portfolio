import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section className="pt-14 pb-8">
      <div className="container-lg grid md:grid-cols-[1fr,260px] items-center gap-8">
        <div>
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {profile.name}
          </motion.h1>
          <p className="mt-2 text-brand font-semibold">{profile.role}</p>
          <p className="mt-4 text-slate-600 leading-7">{profile.summary}</p>
          <div className="mt-6 flex gap-3">
            <a className="btn-primary" href="src\assets\Roshani_Gaund_CV (1).pdf">View CV</a>
            <a className="btn-outline" href="#contact">Contact</a>
          </div>
        </div>
        <motion.img
          src={profile.avatar}
          alt="avatar"
          className="w-48 h-48 md:w-60 md:h-60 rounded-2xl mx-auto md:mx-0 object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
      </div>
    </section>
  );
}
