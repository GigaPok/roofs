import "./App.scss";
import { home, contact, services, about } from "./router";
import { Route, Routes } from "react-router-dom";
import { Home, Services, About, Contact } from "./feature";
import { Titleroof } from "./feature/services/titleroof/Titleroof";
import { Flatto } from "./feature/services/flatto/Flatto";

function App() {
  return (
    <div className="Rooft">
      <Routes>
        <Route path={home} element={<Home />} exact />
        <Route path={contact} element={<Contact />} exact />
        <Route path={services} element={<Services exact />}>
          <Route path="titleroof" element={<Titleroof />} exact />
          <Route path="flatto" element={<Flatto />} exact />
        </Route>
        <Route path={about} element={<About />} exact />
      </Routes>
    </div>
  );
}

export default App;
