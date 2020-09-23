import React from "react";
import styled from "styled-components";

const SavedStrainsContainer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 0.5px solid #bdbdbd;
  border-bottom: 0.5px solid #bdbdbd;
  // background: yellow;
  display: flex;
  justify-content: center;
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

const SavedStrains = () => {
  return (
    <SavedStrainsContainer>
      <NoSavedItemsContainer>
        <NoItemsText>You have 0 Saved Treatments </NoItemsText>
      </NoSavedItemsContainer>
    </SavedStrainsContainer>
  );
};

export default SavedStrains;
