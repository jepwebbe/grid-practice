import React from "react";
import { GridOne } from "../../../Styles/GridOne";
import { HomeStyled, SidebarStyled } from "../../../Styles/Styled.Sidebar";
import { MainStyled } from "../../../Styles/Styled.Main";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <GridOne>
      <MainStyled><div><Link to="/contact">Header</Link></div>
      <div>Run½</div>
      <div>Ruter</div>
      <div>One Mile</div>
      <div> 5 km</div>
      <div>10 km</div></MainStyled>
      <SidebarStyled>Sidebar</SidebarStyled>
    </GridOne>
  );
};

export default Home;
