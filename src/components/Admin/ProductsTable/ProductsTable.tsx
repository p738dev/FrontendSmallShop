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
import SearchProduct from "../SearchProduct/SearchProduct";

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
  StyledSortArea,
  StyledSortSelect,
} from "./ProductsTable.css";

const ProductsTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const navigate = useNavigate();

  const { list, isLoading, currentPage, searchParam, sortParam } = useSelector(
    (state: RootState) => state.products
  );

  const { isConfirmDialogOpen } = useSelector(
    (state: RootState) => state.confirmDialog
  );

  const { isQuestionRemoveProduct } = useSelector(
    (state: RootState) => state.questionDialog
  );

  const searchParams = new URLSearchParams(location.search);

  const [search, setSearch] = useState<string>(searchParam);
  const [page, setPage] = useState<number>(1);
  const recordsPerPage = 7;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = list.slice(firstIndex, lastIndex);

  useEffect(() => {
    if (searchParams.get("sort")) {
      dispatch(
        getProducts({
          page: page,
          searchParam: search,
          sortParam: searchParams.get("sort"),
        })
      );
    } else {
      dispatch(
        getProducts({
          page: page,
          searchParam: search,
          sortParam: sortParam,
        })
      );
    }
  }, [page, searchParam, searchParams.get("sort"), sortParam]);

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
      <SearchProduct
        search={search}
        setSearch={setSearch}
        page={page}
        sortParam={sortParam}
      />
      <StyledSortArea>
        <StyledSortSelect
          defaultValue={""}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setSortParam(e.target.value);
          }}
        >
          <option value={""}></option>
          <option value={"desc"}>Cena od najniższej</option>
          <option value={"asc"}>Cena od najwyższej</option>
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
                  <Link to={`edit_product/${product.id}`}>
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
        page={page}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
};

export default ProductsTable;
