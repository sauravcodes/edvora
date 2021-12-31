import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  display: flex;
  font-size: 17px;
  font-weight: 400;
  font-family: SF Pro Display;
  padding: 8px;
  margin: 8px 0;
  background-color: #232323;
  border: none;
  color: #ffffff;
  border-radius: 5px;

  option {
    padding: 0px 2px 1px;
  }
`;
