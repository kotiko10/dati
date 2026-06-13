import "../styles/home.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="home">
      <div className="overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>DA TI</h1>

        <p>NEW ALBUM OUT NOW</p>

        <button>LISTEN NOW</button>
      </motion.div>
    </div>
  );
}

export default Home;