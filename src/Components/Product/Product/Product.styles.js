import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  box-sizing: border-box;
  font-size: 24px;
  height: 150px;
  width: 210px;
  margin: 20px;
  border-radius: 10px;
  background-color: #232323;
  flex: 0 0 auto;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  transition: 0.2s all ease-in;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;
export const PartOne = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const PartTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: bottom;
  font-size: 10px;
`;
export const Partonedesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
`;

export const Parttwodesc = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductName = styled.div`
  font-size: 15px;
  font-weight: 400;
  font-family: SF Pro Display;
`;
export const BrandName = styled.div`
  color: #a5a5a5;
  font-size: 13px;
  margin-top: 6px;
  font-weight: 300;
  font-family: SF Pro Display;
`;
export const Price = styled.div`
  font-size: 13px;
  margin-top: 6px;
  font-weight: 300;
  font-family: SF Pro Display;
`;
export const Location = styled.div`
  color: #a5a5a5;
  font-size: 13px;
  margin-top: 11px;
  font-weight: 300;
  font-family: SF Pro Display;
`;
export const DateDiv = styled.div`
  color: #a5a5a5;
  font-size: 13px;
  margin-top: 11px;
  font-weight: 300;
  font-family: SF Pro Display;
`;
export const Description = styled.div`
  color: #a5a5a5;
  font-size: 13px;
  margin-top: 6px;
  font-weight: 300;
  font-family: SF Pro Display;
`;
