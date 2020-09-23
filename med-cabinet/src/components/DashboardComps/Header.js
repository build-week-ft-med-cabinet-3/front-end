import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 70px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ComponentWrapper = styled.div`
  width: 95%;
  height: 40px;
  background: #f3f3f3;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ComponentWrapper></ComponentWrapper>
    </HeaderContainer>
  );
};

export default Header;
