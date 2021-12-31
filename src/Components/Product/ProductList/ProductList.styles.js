import styled from "styled-components";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Title = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: SF Pro Display;
  border-bottom: 1px solid #fff;
  padding: 0 0 12px 0;
  :first-child {
    margin-top: 16px;
  }
  margin-top: 50px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: 20px;
  background-color: #131313;
  overflow-x: hidden;
  scroll-behavior: smooth;
  border-radius: 10px;
`;

export const RightArrow = styled(MdArrowForwardIos)`
  position: absolute;
  right: 1px;
  margin-top: 75px;
  cursor: pointer;
  z-index: 1;
`;

export const LeftArrow = styled(MdArrowBackIos)`
  position: absolute;
  left: 1px;
  margin-top: 75px;
  cursor: pointer;
  z-index: 1;
`;
