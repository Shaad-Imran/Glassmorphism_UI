import React from "react";
import Dashboard from "./Dashboard";
import Games from "./Games";

const Hero = () => {
  return (
    <main>
      <section className="glass">
        <Dashboard />
        <Games />
      </section>
    </main>
  );
};

export default Hero;
