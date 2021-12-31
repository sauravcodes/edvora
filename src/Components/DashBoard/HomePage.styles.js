import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  margin: 36px;
  align-items: center;

  @media (min-width: 1500px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
