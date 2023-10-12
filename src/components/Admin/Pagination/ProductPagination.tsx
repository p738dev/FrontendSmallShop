import React from "react";

import {
  StyledAreaList,
  StyledAreaNav,
  StyledAreaPagination,
  StyledButtonPage,
} from "./ProductPagination.css";

interface Props {
  totalPages: number;
  recordsPerPage: number;
  paginate: (pageNumber: number) => void;
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
  const pageNumbers = Math.ceil(totalPages / recordsPerPage);

  return (
    <StyledAreaPagination>
      <StyledAreaNav>
        <StyledAreaList>
          <StyledButtonPage onClick={prevPage}>Prev</StyledButtonPage>
          {pageNumbers > 0 &&
            [...Array(pageNumbers)].map((number, index) => (
              <li key={index}>
                <StyledButtonPage onClick={() => paginate(index)}>
                  {index + 1}
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
