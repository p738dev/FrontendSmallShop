import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import {
  StyledAreaList,
  StyledAreaNav,
  StyledAreaPagination,
  StyledButtonPage,
} from "./ProductPagination.css";

interface PropsPaginate {
  page: number;
  paginate: (pageNumber: number) => void;
  prevPage: () => void;
  nextPage: () => void;
}

const ProductPagination = ({
  page,
  paginate,
  prevPage,
  nextPage,
}: PropsPaginate) => {
  const { totalPages, recordsPerPage } = useSelector(
    (state: RootState) => state.products
  );

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / recordsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <StyledAreaPagination>
      <StyledAreaNav>
        <StyledAreaList>
          <StyledButtonPage onClick={prevPage}>Prev</StyledButtonPage>
          {pageNumbers.map((num) => (
            <li key={num}>
              <StyledButtonPage
                className={page === num ? "active" : ""}
                onClick={() => paginate(num)}
              >
                {num}
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
