import { FormatListNumberedRtlOutlined } from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import med from "./assets/med.svg";
import loadingStrains from "./assets/loadingStrains.gif";
import saveIcon from "./assets/saveIcon.svg";

const RecommendedStrainsContainer = styled.div`
  width: 100%;
  min-height: 400px;
  // background: lightblue;
  border-bottom: 0.75px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const CalculatingText = styled.h5`
  color: #e26276;
  font-size: 0.75em;
`;
const Spinner = styled.img`
  width: 60px;
  height: 60px;
`;

const CardContainer = styled.div`
  width: 420px;
  height: 600px;
  border: 0.5px solid #bdbdbd;
  margin-top: 10px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

const RecText = styled.h6`
  width: 420px;
  text-align: left;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const RecommendedStrains = ({ recommendedStrain, isFetching }) => {
  if (recommendedStrain === null) {
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
  } else if (isFetching === true && recommendedStrain === 0) {
    return (
      <RecommendedStrainsContainer>
        <NoRecStrainsContainer>
          <Spinner src={loadingStrains} alt="loading spinner" />
          <CalculatingText>Calculating Your Recommended Strain</CalculatingText>
        </NoRecStrainsContainer>
      </RecommendedStrainsContainer>
    );
  } else {
    return (
      <RecommendedStrainsContainer>
        <RecText>Recommended Treatment</RecText>
        <CardContainer>
          <CardWrapper>
            <SaveButton>
              <SaveTxt>Save</SaveTxt>
              <SaveIcon src={saveIcon} alt="save icon" />
            </SaveButton>
            <h7>{recommendedStrain.Name}</h7>
            <p style={{ fontSize: "0.75em" }}>
              {recommendedStrain.Description}
            </p>

            {/* <IntroDataDiv>
              <IconDiv>
                <TreatmentIcon />
              </IconDiv>
              <IntroDataDiv>
                <Name>{recommendedStrain.Name}</Name>
                <RatingDiv>
                  <TopRatedDiv>
                    <RewardIcon />
                    <RewardTxt>Top Rated</RewardTxt>
                  </TopRatedDiv>
                </RatingDiv>
              </IntroDataDiv>
            </IntroDataDiv> */}
          </CardWrapper>
        </CardContainer>
      </RecommendedStrainsContainer>
    );
  }
};

// export default RecommendedStrains;

const mapStateToProps = (state) => {
  return {
    recommendedStrain: state.recommendedStrain,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, {})(RecommendedStrains);