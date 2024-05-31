import './App.css';
import NavBar from './components/navbar/navbar';
import HeroSlider from './components/HeroSection/Hero';
import Search from './components/Search/Search';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <HeroSlider/>
     <Search/>
    </div>
  );
}

export default App;
