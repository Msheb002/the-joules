import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./home";

import Members from "./Pages/members";
import Stories from "./Pages/stories";
import Games from "./Pages/games";
import Thursday from "./Pages/thursday";
import Plans from "./Pages/plans";

function App() {
  return (
    <BrowserRouter basename="/the-joules">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/members"
          element={<Members />}
        />
        <Route
          path="/stories"
          element={<Stories />}
        />
        <Route
          path="/games"
          element={<Games />}
        />
        <Route
          path="/thursday"
          element={<Thursday />}
        />
        <Route
          path="/plans"
          element={<Plans />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;