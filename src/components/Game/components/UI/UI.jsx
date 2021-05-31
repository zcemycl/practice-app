import React from "react";
import styled from "styled-components";

const ScreenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 100;
`;

export const UI = ({ children }) => {
  return <ScreenContainer>{children}</ScreenContainer>;
};
