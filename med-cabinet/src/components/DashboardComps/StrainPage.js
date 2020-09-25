import React from "react";
import Header from "./Header";
import SavedStrains from "./SavedStrains";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import saveIcon from "./assets/saveIcon.svg";

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

const LInfo = styled.div`
  width: 300px;
  height: 300px;
  background: white;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h5`
  font-size: 1em;
`;

const SaveButton = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // background: yellow;
`;

const SaveTxt = styled.p`
  font-size: 0.75em;
`;

const SaveIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const StrainPage = () => {
  const params = useParams();
  return (
    <div>
      <Header />
      <SavedStrains />
      <StrainPageContainer>
        <LeftWrapper>
          <LInfo>
            <Name>Tahoe OG Kush</Name>
            <SaveButton>
              <SaveTxt>Save</SaveTxt>
              <SaveIcon src={saveIcon} alt="save icon" />
            </SaveButton>
          </LInfo>
        </LeftWrapper>
        <RightWrapper></RightWrapper>
      </StrainPageContainer>
    </div>
  );
};

export default StrainPage;