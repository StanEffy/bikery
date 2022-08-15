import './App.css';

import Header from "./components/Header/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SingleStation from "./components/SingleStation/SingleStation";
import Map from "./components/Map/Map";
import StationList from "./components/StationsList/StationList";
import Statistics from "./components/Statistics/Statistics";
import AddTrip from "./components/AddTrip/AddTrip";
import AddStation from "./components/AddStation/AddStation";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {LoadAllStations} from "./store/actions/stationsActions";
import {LoadAllStationsStats} from "./store/actions/stationsStatsActions";
import InitialPage from "./components/InitialPage/InitialPage";

function App() {
  const dispatch = useDispatch();
 useEffect( () => {
   // @ts-ignore
   dispatch(LoadAllStations())
   // @ts-ignore
   dispatch(LoadAllStationsStats())
 })
  return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Header />
            <Routes>
              <Route path={'/'} element={<InitialPage />} />
              <Route path={'/stations'} element={<StationList />} />
              <Route path={'/stations/:id'} element={<SingleStation />} />

              <Route path={'/map'} element={<Map />} />

              <Route path={'/statistics'} element={<Statistics />} />

              <Route path={'/add_trip'} element={<AddTrip />} />
              <Route path={'/add_station'} element={<AddStation />} />

            </Routes>
          </Router>

        </header>
      </div>
  );
}

export default App;
