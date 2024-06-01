import './App.css';
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import DownloadApp from './components/Sections/DownloadApp/DownloadApp';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Outlet />
    <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
