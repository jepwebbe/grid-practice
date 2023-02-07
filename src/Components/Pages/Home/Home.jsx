import React from "react";
import { GridOne } from "../../../Styles/GridOne";
import { FooterStyled } from "../../../Styles/Styled.Footer";
import { HeroStyled } from "../../../Styles/Styled.Hero";
import { HomeStyled } from "../../../Styles/Styled.Home";
import { MainStyled } from "../../../Styles/Styled.Main";

const Home = () => {
  return (
    <GridOne>
      <HomeStyled>Header</HomeStyled>
      <HeroStyled>Hero</HeroStyled>
      <MainStyled>Main</MainStyled>
      <FooterStyled>Footer</FooterStyled>
    </GridOne>
  );
};

export default Home;
