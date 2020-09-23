import React from "react";
import styled from "styled-components";
import med from "./assets/med.svg";

const RecommendedStrainsContainer = styled.div`
  width: 100%;
  height: 400px;
  background: lightblue;
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

const RecommendedStrains = () => {
  return (
    <RecommendedStrainsContainer>
      <NoRecStrainsContainer>
        <NoRecIcon src={med} alt="No recommendation icons" />
        <div>You have 0 Recommend Strains for Treatment</div>
      </NoRecStrainsContainer>
    </RecommendedStrainsContainer>
  );
};

export default RecommendedStrains;
