import "./App.scss";
import { home, contact, services, about } from "./router";
import { Route, Routes } from "react-router-dom";
import { Home, Services, About, Contact } from "./feature";

function App() {
  return (
    <div className="Rooft">
      <Routes>
        <Route path={home} element={<Home />} exact />
        <Route path={contact} element={<Contact />} exact />
        <Route path={services} element={<Services exact />} />
        <Route path={about} element={<About />} exact />
      </Routes>
    </div>
  );
}

export default App;
