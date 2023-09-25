import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { getProducts } from "../../../store/productsSlice";
import ProductPagination from "../Pagination/ProductPagination";

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
} from "./ProductsTable.css";

const ProductsTable = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { list, isLoading, currentPage, totalPages } = useSelector(
    (state: RootState) => state.products
  );

  const [page, setPage] = useState(1);
  const [recordsPerPage] = useState(7);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = list.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch(
      getProducts({
        currentPage: page,
      })
    );
  }, [page]);

  const paginate = (pageNumber: number) => setPage(pageNumber);

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

  if (isLoading) {
    return (
      <StyledLoadingContainer>
        <h3>Loading...</h3>
      </StyledLoadingContainer>
    );
  }

  return (
    <>
      <StyledAreaNewProduct>
        <Link to="">
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
                    <StyledOptionButtonEdit>Edit</StyledOptionButtonEdit>
                  </Link>
                  <StyledOptionButtonDelete
                  // onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
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
