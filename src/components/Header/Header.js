import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../Actions/fetchUser";
import { Cart3, PersonCircle } from "react-bootstrap-icons";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StoreIcon from "@mui/icons-material/Store";
import ModalComponent from "../Modal";
import { Button } from "@mui/material";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalState, setModelState] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      await dispatch(fetchUser());
      console.log("Header is mounted");
    };
    fetchUserData();
  }, [dispatch]);

  return (
    <div>
      <ModalComponent isOpen={modalState}>
        <div>
          <h1>Register</h1>
          <Button onClick={() => navigate("/Register")}>
            <PersonAddIcon fontSize="large" />
          </Button>
        </div>
        <div>
          <h1>EShop</h1>
          <Button onClick={() => setModelState(false)}>
            <StoreIcon fontSize="large" />
          </Button>
        </div>
      </ModalComponent>
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <h1>
              EZ-Cart <Cart3 />
            </h1>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="Products">Products</Link>
            </li>
          </ul>
          <div>
            <PersonCircle size={30} />
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
