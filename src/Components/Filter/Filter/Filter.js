import React from "react";
import FilterBox from "../FilterBox/FilterBox";
import { Wrapper, Title } from "./Filter.styles";

function Filter() {
  return (
    <Wrapper>
      <Title>Filters</Title>
      <FilterBox />
    </Wrapper>
  );
}

export default Filter;
