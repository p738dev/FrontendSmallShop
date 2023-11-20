import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsTable from "../ProductsTable/ProductsTable";
import UsersTable from "../UsersTable/UsersTable";
import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct";

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
        <Route
          path="/products/edit_product/:id"
          element={<EditProduct />}
        />
      </Routes>
    </div>
  );
};

export default AdminRoute;
