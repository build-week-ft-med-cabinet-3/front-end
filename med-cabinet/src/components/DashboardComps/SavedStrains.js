import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import saveIcon from "./assets/saveIcon.svg";

const NoSavedStrainsContainer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 0.5px solid #bdbdbd;
  border-bottom: 0.5px solid #bdbdbd;
  // background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SavedStrainsContainer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 0.5px solid #bdbdbd;
  border-bottom: 0.5px solid #bdbdbd;
  // background: yellow;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NoSavedItemsContainer = styled.div`
  width: 60%;
  height: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoItemsText = styled.p`
  font-size: 0.75em;
  color: #bdbdbd;
`;

const SavedStrainCard = styled.div`
  width: 180px;
  height: 80px;
  border-radius: 10px;
  border: 0.5px solid #828282;
  margin-left: 20px;
`;

const SaveIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 40px;
`;

const SavedStrainSignifier = styled.path`
  font-size: 0.5em;
`;

const StrainName = styled.path`
  font-size: 0.5em;
`;

// const savedStrains = [
//   { id: 0, name: "Purple Kush" },
//   { id: 1, name: "Purple Kush" },
//   { id: 3, name: "Purple Kush" },
// ];

const SavedStrains = ({ savedStrains }) => {
  console.log("I am the value of savedStrains", savedStrains);

  if (!savedStrains[0]) {
    return (
      <NoSavedStrainsContainer>
        <NoSavedItemsContainer>
          <NoItemsText>You have 0 Saved Treatments </NoItemsText>
        </NoSavedItemsContainer>
      </NoSavedStrainsContainer>
    );
  } else {
    return (
      <SavedStrainsContainer>
        <SaveIcon src={saveIcon} alt="save icon" />
        <SavedStrainSignifier>Saved Strains</SavedStrainSignifier>
        {savedStrains.map((item) => {
          return (
            <SavedStrainCard key={item.id}>
              <StrainName>{item.Name}</StrainName>
            </SavedStrainCard>
          );
        })}
      </SavedStrainsContainer>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    savedStrains: state.savedStrains,
  };
};

export default connect(mapStateToProps, {})(SavedStrains);
