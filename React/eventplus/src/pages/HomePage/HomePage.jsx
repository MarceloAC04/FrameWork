import React from "react";
import Banner from "../../componentes/Banner/Banner";
import MainContent from "../../componentes/MainContent/MainContent";
import VisionSection from "../../componentes/VisionSection/VisionSection";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <MainContent>
        <Banner />
        <VisionSection />
      </MainContent>
    </div>
  );
};

export default HomePage;
