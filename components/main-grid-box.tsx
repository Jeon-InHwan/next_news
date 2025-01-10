"use client";

import styled from "styled-components";

const MainSection = styled.main`
  margin-top: 100px;
  height: 100%;
  padding: 0px 4%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  grid-template-rows: auto;
  width: 100%;
  box-sizing: border-box;
`;

interface MainGridProps {
  children: React.ReactNode;
}

const MainGridBox: React.FC<MainGridProps> = ({ children }) => {
  return <MainSection>{children}</MainSection>;
};

export default MainGridBox;
