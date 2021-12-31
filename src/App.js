import styled from "styled-components";
import HomePage from "./Components/DashBoard/HomePage";

export default function App() {
  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #292929;
  width: 100%;
  min-height: 100vh;
`;
