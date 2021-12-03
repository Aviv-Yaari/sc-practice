import styled from "styled-components";

export const MainContent = styled.main`
  display: grid;
  grid-auto-rows: 1fr;
  gap: 30px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
