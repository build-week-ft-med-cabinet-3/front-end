import React from "react";
import styled from "styled-components";

import TreatmentForm from "./TreatmentForm";

const DashboardContainer = styled.div`
  width: 100vw;
  // height: 100vh;
  background: #ffeaea;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <TreatmentForm />
    </DashboardContainer>
  );
};

export default Dashboard;
