import React from "react";
import { AiFillCar } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import Newsletter from "../../components/Newsletter/Newsletter";

import {
  StyledAreaImageHome,
  StyledCarIcon,
  StyledCard,
  StyledDeliverArea,
  StyledDriveContent,
  StyledHeader,
  StyledImage,
  StyledImageAndDeliveryArea,
  StyledParagraph,
  StyledPersonIcon,
  StyledSectionHome,
} from "./Home.css";

const Home = () => {
  const galleryPicture = require("../../images/galerrypictture.jpg");

  return (
    <StyledSectionHome>
      <StyledImageAndDeliveryArea>
        <StyledAreaImageHome>
          <StyledImage
            src={galleryPicture}
            alt="Shop picture"
          />
        </StyledAreaImageHome>
        <StyledDeliverArea>
          <StyledCard>
            <StyledCarIcon>
              <AiFillCar />
            </StyledCarIcon>
            <StyledDriveContent>
              <StyledHeader>Darmowa wysyłka od 300 zł</StyledHeader>
              <StyledParagraph>
                Dla pierwszego zamówienia w sklepie
              </StyledParagraph>
            </StyledDriveContent>
          </StyledCard>
          <StyledCard>
            <StyledPersonIcon>
              <BsPersonFill />
            </StyledPersonIcon>
            <StyledDriveContent>
              <StyledHeader>Załóż konto i odbierz 10% rabatu</StyledHeader>
              <StyledParagraph>Tylko przez najbliższe 14 dni</StyledParagraph>
            </StyledDriveContent>
          </StyledCard>
        </StyledDeliverArea>
      </StyledImageAndDeliveryArea>
      <Newsletter />
    </StyledSectionHome>
  );
};

export default Home;
