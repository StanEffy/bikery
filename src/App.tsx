import './App.css';

import Header from "./components/Header/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SingleStation from "./components/SingleStation/SingleStation";
import Map from "./components/Map/Map";
import StationList from "./components/StationsList/StationList";
import Statistics from "./components/Statistics/Statistics";
import AddTrip from "./components/AddTrip/AddTrip";
import AddStation from "./components/AddStation/AddStation";

function App() {


  return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Header />
            <Routes>
              <Route path={'/stations'} element={<StationList />} />
              <Route path={'/map'} element={<Map />} />
              <Route path={'/random_station'} element={<SingleStation />} />
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
