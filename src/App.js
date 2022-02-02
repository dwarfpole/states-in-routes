import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingerState from "./context/singer/singerState";

import Navbar from "./components/Navbar";
import Singer from "./components/singer/Singer";

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <SingerState>
        <Singer />
      </SingerState>
    </div>
  );
}
