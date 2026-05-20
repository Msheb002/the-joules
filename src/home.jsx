import "./Home.css";

import image1 from "./assets/Adel.jpeg";
import image2 from "./assets/Fahmy.jpeg";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <h2 className="subtitle">Welcome to</h2>

        <h1 className="title">The Joules</h1>

        <h1 className="stay">Stay Tuned</h1>

        <div className="vs-section">
          <img src={image1} alt="Adel" className="battle-image" />

          <h2 className="vs-text">VS</h2>

          <img src={image2} alt="Fahmy" className="battle-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;