import "./App.scss";
import { home, contact, services, about } from "./router";
import { Route, Routes } from "react-router-dom";
import { Home, Services, About, Contact } from "./feature";
import { Titleroof } from "./feature/services/titleroof/Titleroof";
import { Flatto } from "./feature/services/flatto/Flatto";
import { Facia } from "./feature/services/facia/Facia";
import { Lead } from "./feature/services/lead/Lead";

function App() {
  return (
    <div className="Rooft">
      <Routes>
        <Route path={home} element={<Home />} exact />
        <Route path={contact} element={<Contact />} exact />
        <Route path={services} element={<Services exact />}>
          <Route path="titleroof" element={<Titleroof />} exact />
          <Route path="flatto" element={<Flatto />} exact />
          <Route path="facia" element={<Facia />} exact />
          <Route path="lead" element={<Lead />} exact />
        </Route>
        <Route path={about} element={<About />} exact />
      </Routes>
    </div>
  );
}

export default App;
