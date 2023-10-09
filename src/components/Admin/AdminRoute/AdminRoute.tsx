import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsTable from "../ProductsTable/ProductsTable";
import UsersTable from "../UsersTable/UsersTable";
import AddProduct from "../AddProduct/AddProduct";

const AdminRoute = () => {
  return (
    <div>
      <Routes>
        <Route
          path="products"
          element={<ProductsTable />}
        />
        <Route
          path="users"
          element={<UsersTable />}
        />
        <Route
          path="/products/add_product"
          element={<AddProduct />}
        />
      </Routes>
    </div>
  );
};

export default AdminRoute;
