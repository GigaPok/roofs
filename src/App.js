import "./App.scss";
import {
  home,
  contact,
  services,
  about,
  ExteriorInteriorPainting,
  SlateTileRoofs,
  FlatFiberglasRoofs,
  LeadFlashingChimneyRepoint,
  FaciaSoffitsGuttering,
  TilingInDoorOutDoor,
  ExternalInsulation,
  AtticInsulation,
  NewSheedRenew,
} from "./router";
import { Route, Routes } from "react-router-dom";
import { Home, Services, About, Contact } from "./feature";
import { Facia } from "./feature/services/facia/Facia";
import { Lead } from "./feature/services/lead/Lead";
import { Flat } from "./feature/services/flat/Flat";
import { Slate } from "./feature/services/slate/Slate";
import { Exterior } from "./feature/services/paintingTiling/exteriorInterior/Exterior";
import { Tiling } from "./feature/services/paintingTiling/tiling/Tiling";
import { External } from "./feature/services/insulation/external/External";
import { Attic } from "./feature/services/insulation/attic/Attic";
import { Sheed } from "./feature/services/sheed/Sheed";

function App() {
  return (
    <div className="Rooft">
      <Routes>
        <Route path={home} element={<Home />} exact />
        <Route path={contact} element={<Contact />} exact />
        <Route path={services} element={<Services exact />}>
          <Route path={SlateTileRoofs} element={<Slate />} exact />
          <Route path={FlatFiberglasRoofs} element={<Flat />} exact />
          <Route path={FaciaSoffitsGuttering} element={<Facia />} exact />
          <Route path={LeadFlashingChimneyRepoint} element={<Lead />} exact />
          <Route path={ExteriorInteriorPainting} element={<Exterior />} exact />
          <Route path={TilingInDoorOutDoor} element={<Tiling />} exact />
          <Route path={ExternalInsulation} element={<External />} exact />
          <Route path={AtticInsulation} element={<Attic />} exact />
          <Route path={NewSheedRenew} element={<Sheed />} exact />
        </Route>
        <Route path={about} element={<About />} exact />
      </Routes>
    </div>
  );
}

export default App;
