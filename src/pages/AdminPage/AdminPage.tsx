import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import HorizontalTopNavbar from "../../components/Admin/HorizontalTopNavbar/HorizontalTopNavbar";
import VerticalLeftNavbar from "../../components/Admin/VerticalLeftNavbar/VerticalLeftNavbar";
import AdminRoute from "../../components/Admin/AdminRoute/AdminRoute";

import {
  StyledAdminHomeSection,
  StyledAreaClock,
  StyledClock,
  StyledHomeAreaContent,
} from "./AdminPage.css";

const AdminPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [time, setTime] = useState<string>();

  const token = Cookies.get("token");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);

    if (!token && location.pathname.includes("/admin")) {
      navigate("/login");
    }
  }, [location, token]);

  return (
    <>
      <HorizontalTopNavbar />
      <VerticalLeftNavbar />
      <StyledAdminHomeSection>
        <StyledHomeAreaContent>
          <StyledAreaClock>
            <StyledClock>{time}</StyledClock>
          </StyledAreaClock>
          <AdminRoute />
        </StyledHomeAreaContent>
      </StyledAdminHomeSection>
    </>
  );
};

export default AdminPage;
