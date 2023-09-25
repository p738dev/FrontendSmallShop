import React, { useState } from "react";

import {
  StyledAreaList,
  StyledAreaNav,
  StyledAreaPagination,
  StyledButtonPage,
} from "./ProductPagination.css";

interface Props {
  totalPages: number;
  recordsPerPage: number;
  paginate: any;
  prevPage: () => void;
  nextPage: () => void;
}

const ProductPagination = ({
  totalPages,
  recordsPerPage,
  paginate,
  prevPage,
  nextPage,
}: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / recordsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledAreaPagination>
      <StyledAreaNav>
        <StyledAreaList>
          <StyledButtonPage onClick={prevPage}>Prev</StyledButtonPage>
          {pageNumbers.map((number) => (
            <li key={number}>
              <StyledButtonPage onClick={() => paginate(number)}>
                {number}
              </StyledButtonPage>
            </li>
          ))}
          <StyledButtonPage onClick={nextPage}>Next</StyledButtonPage>
        </StyledAreaList>
      </StyledAreaNav>
    </StyledAreaPagination>
  );
};

export default ProductPagination;
