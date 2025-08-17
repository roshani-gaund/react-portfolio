import React from "react";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="container-lg text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Roshani Gaund. All rights reserved.
      </div>
    </footer>
  );
}
