import './App.css';
import { Outlet } from "react-router-dom";
//import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
    <Outlet />
    </div>
  );
}

export default App;
