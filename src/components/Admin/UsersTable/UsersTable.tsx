import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { getUsers } from "../../../store/usersSlice";

import {
  StyledBodyTable,
  StyledHederTable,
  StyledLoadingContainer,
  StyledRowBodyTable,
  StyledUsersTable,
} from "./UsersTable.css";

const UsersTable = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { usersList, isLoading } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) {
    return (
      <StyledLoadingContainer>
        <h3>Loading...</h3>
      </StyledLoadingContainer>
    );
  }

  return (
    <StyledUsersTable>
      <thead>
        <tr>
          <StyledHederTable>Name</StyledHederTable>
          <StyledHederTable>Email</StyledHederTable>
          <StyledHederTable>Role_id</StyledHederTable>
        </tr>
      </thead>
      <tbody>
        {usersList.map((user) => (
          <StyledRowBodyTable key={user.name}>
            <StyledBodyTable>{user.name.toLowerCase()}</StyledBodyTable>
            <StyledBodyTable>{user.email}</StyledBodyTable>
            <StyledBodyTable>{user.role_id}</StyledBodyTable>
          </StyledRowBodyTable>
        ))}
      </tbody>
    </StyledUsersTable>
  );
};

export default UsersTable;
