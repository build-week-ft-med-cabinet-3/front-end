import React from "react";
import styled from "styled-components";
import med from "./assets/med.svg";

const RecommendedStrainsContainer = styled.div`
  width: 100%;
  height: 400px;
  background: lightblue;
  border-bottom: 0.75px solid #bdbdbd;
`;

const NoRecStrainsContainer = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoRecIcon = styled.img`
  width: 100px;
  height: 100px;
`;

const NoStrainsText = styled.p`
  color: #bdbdbd;
  font-size: 0.75em;
`;

const RecommendedStrains = () => {
  return (
    <RecommendedStrainsContainer>
      <NoRecStrainsContainer>
        <NoRecIcon src={med} alt="No recommendation icons" />
        <NoStrainsText>
          You have 0 Recommend Strains for Treatment
        </NoStrainsText>
      </NoRecStrainsContainer>
    </RecommendedStrainsContainer>
  );
};

export default RecommendedStrains;
