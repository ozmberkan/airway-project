import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Carousel from "./components/Carousel/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="pb-6">
      <Navbar />
      <Header />
      <Search />
      <Carousel />
    </div>
  );
};

export default App;
