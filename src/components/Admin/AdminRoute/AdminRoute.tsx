import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsTable from "../ProductsTable/ProductsTable";
import UsersTable from "../UsersTable/UsersTable";

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
      </Routes>
    </div>
  );
};

export default AdminRoute;
