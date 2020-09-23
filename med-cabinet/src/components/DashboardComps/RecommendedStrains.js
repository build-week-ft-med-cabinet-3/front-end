import { FormatListNumberedRtlOutlined } from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import med from "./assets/med.svg";
import loadingStrains from "./assets/loadingStrains.gif";

const RecommendedStrainsContainer = styled.div`
  width: 100%;
  height: 400px;
  // background: lightblue;
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

const CalculatingText = styled.h5`
  color: #e26276;
  font-size: 0.75em;
`;
const Spinner = styled.img`
  width: 60px;
  height: 60px;
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
        <div>{recommendedStrain.Name}</div>
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
