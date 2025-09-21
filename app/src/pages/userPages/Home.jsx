import React, { useEffect } from "react";
import Nav from "./Navbar";
import Hero from "./Hero";
import Menu from "./Menu";
import About from "./About";
import Support from "./Support";
import Footer from "./Footer";

function Home() {
  useEffect(() => {
    console.log("Spice Palace Home component mounted");
  }, []);

  return (
    <div className="min-h-screen bg-base-100">
      <Nav />
      <Hero />
      <Menu />
      <About />
      <Support />
      <Footer />
    </div>
  );
}

export default Home;
