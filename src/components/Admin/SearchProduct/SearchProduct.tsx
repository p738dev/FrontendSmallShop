import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { getProducts } from "../../../store/productsSlice";

import {
  StyledSearchArea,
  StyledSearchButton,
  StyledSearchInput,
} from "./SearchProduct.css";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  sortParam: string;
}

const SearchProduct = ({ search, setSearch, page, sortParam }: SearchProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <StyledSearchArea>
      <StyledSearchInput
        type="text"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
      <StyledSearchButton
        onClick={() =>
          dispatch(
            getProducts({
              page: page,
              searchParam: search,
              sortParam: sortParam,
            })
          )
        }
      >
        Szukaj
      </StyledSearchButton>
    </StyledSearchArea>
  );
};

export default SearchProduct;
