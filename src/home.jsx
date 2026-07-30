import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <header className="toolbar">
        <div className="brand">The Joules</div>

        <nav className="nav-center" dir="rtl">
          <Link to="/members">الشلة</Link>
          <Link to="/stories">قصص وحواديت</Link>
          <Link to="/games">العاب ومسابقات</Link>
          <Link to="/thursday">قعدة الخميس</Link>
          <Link to="/plans">الخطط والإنجازات</Link>
        </nav>
      </header>

      <main className="content">
        <h2 className="subtitle">Welcome to</h2>
        <h1 className="title">The Joules</h1>
        <p className="stay">Stay Tuned</p>
      </main>
    </div>
  );
}

export default Home;