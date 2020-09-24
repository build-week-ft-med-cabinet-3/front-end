import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StrainPageContainer = styled.div`
  width: 100%;
  height: 70vh;
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftWrapper = styled.div`
  width: 50%;
  height: 90%;
  background: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightWrapper = styled.div`
  width: 50%;
  height: 90%;
  background: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StrainPage = () => {
  const params = useParams();
  return (
    <StrainPageContainer>
      <LeftWrapper></LeftWrapper>
      <RightWrapper></RightWrapper>
    </StrainPageContainer>
  );
};

export default StrainPage;
