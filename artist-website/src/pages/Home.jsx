import "../styles/home.css";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

function Home() {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>DA TI</h1>

        <p>NEW EP OUT NOW</p>

        <p>Welcome to DATIVERSE</p>

        <div className="hero-buttons">
          <button>LISTEN NOW</button>
          <button className="secondary">WATCH VIDEO</button>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;