import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
// import LineChart from "./components/LineChart";
import "./styles/app.css";
import ImageCarousel from "./components/ImageCarousel";

const images = require
  .context("./assets/img", false, /\.webp$/)
  .keys()
  .map((file) => require(`./assets/img/${file.replace("./", "")}`));

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>

        <div className="main-content">
          <Navbar/>

          <ImageCarousel images={images} interval={5000} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
