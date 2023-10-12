import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { deleteProduct, getProducts } from "../../../store/productsSlice";
import ProductPagination from "../Pagination/ProductPagination";
import QuestionDialog from "../../QuestionDialog/QuestionDialog";
import { openQuestionRemoveDialog } from "../../../store/questionDialogSlice";
import ConfirmDialog from "../../ConfirmDialog/ConfirmDialog";
import { closeConfirmDialog } from "../../../store/confirmDialogSlice";

import {
  StyledAddProductButton,
  StyledAreaNewProduct,
  StyledBodyTable,
  StyledHederTable,
  StyledLoadingContainer,
  StyledOptionButtonDelete,
  StyledOptionButtonEdit,
  StyledOptions,
  StyledProductsTable,
  StyledRowBodyTable,
  StyledSearchArea,
  StyledSearchButton,
  StyledSearchInput,
  StyledSortArea,
  StyledSortSelect,
} from "./ProductsTable.css";

const ProductsTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const navigate = useNavigate();

  const { list, isLoading, currentPage, totalPages, searchParam, sortParam } =
    useSelector((state: RootState) => state.products);

  const { isConfirmDialogOpen } = useSelector(
    (state: RootState) => state.confirmDialog
  );

  const { isQuestionRemoveProduct } = useSelector(
    (state: RootState) => state.questionDialog
  );

  const searchParams = new URLSearchParams(location.search);

  const [search, setSearch] = useState(searchParam);
  const [page, setPage] = useState(1);
  const [recordsPerPage] = useState(7);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = list.slice(firstIndex, lastIndex);

  useEffect(() => {
    if (searchParams.get("sort")) {
      dispatch(
        getProducts({
          currentPage: page,
          searchParam: search,
          sortParam: searchParams.get("sort"),
        })
      );
    }
  }, [page, searchParams.get("sort")]);

  const paginate = (pageNumber: number) => setPage(pageNumber + 1);

  const prevPage = () => {
    if (page !== firstIndex) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page !== lastIndex) {
      setPage(page + 1);
    }
  };

  const setSortParam = (way: string): void => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("sort", way);
    const data = searchParams.toString();
    navigate(`${location.pathname}?${data}`);
  };

  if (isLoading) {
    return (
      <StyledLoadingContainer>
        <h3>Loading...</h3>
      </StyledLoadingContainer>
    );
  }

  const handleDeleteProduct = (id: string) => {
    dispatch(openQuestionRemoveDialog());
    if (!isConfirmDialogOpen) {
      dispatch(deleteProduct(id));
      setTimeout(() => {
        dispatch(closeConfirmDialog());
      }, 2000);
    }
  };

  return (
    <>
      {isQuestionRemoveProduct && <QuestionDialog />}
      {isConfirmDialogOpen && (
        <ConfirmDialog title="Produkt został pomyślnie usunięty" />
      )}
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
                currentPage: page,
                searchParam: search,
                sortParam: sortParam,
              })
            )
          }
        >
          Szukaj
        </StyledSearchButton>
      </StyledSearchArea>
      <StyledSortArea>
        <StyledSortSelect
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setSortParam(e.target.value);
          }}
        >
          <option value={"asc"}>Cena od najniższej</option>
          <option value={"desc"}>Cena od najwyższej</option>
        </StyledSortSelect>
      </StyledSortArea>
      <StyledAreaNewProduct>
        <Link to={"add_product"}>
          <StyledAddProductButton>Dodaj produkt</StyledAddProductButton>
        </Link>
      </StyledAreaNewProduct>
      <StyledProductsTable>
        <thead>
          <tr>
            <StyledHederTable>Nazwa</StyledHederTable>
            <StyledHederTable>Cena</StyledHederTable>
            <StyledHederTable>Opis</StyledHederTable>
            <StyledHederTable>Kategoria</StyledHederTable>
            <StyledHederTable>Opcje</StyledHederTable>
          </tr>
        </thead>
        <tbody>
          {records.map((product) => (
            <StyledRowBodyTable key={product.id}>
              <StyledBodyTable>{product.title}</StyledBodyTable>
              <StyledBodyTable>{product.price}</StyledBodyTable>
              <StyledBodyTable>{product.desc}</StyledBodyTable>
              <StyledBodyTable>{product.category}</StyledBodyTable>
              <StyledBodyTable>
                <StyledOptions>
                  <Link to={""}>
                    <StyledOptionButtonEdit>Edytuj</StyledOptionButtonEdit>
                  </Link>
                  <StyledOptionButtonDelete
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Usuń
                  </StyledOptionButtonDelete>
                </StyledOptions>
              </StyledBodyTable>
            </StyledRowBodyTable>
          ))}
        </tbody>
      </StyledProductsTable>
      <ProductPagination
        totalPages={totalPages}
        recordsPerPage={recordsPerPage}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
};

export default ProductsTable;
