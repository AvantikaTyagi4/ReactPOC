// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import DrawerAppBar from "./components/Appbar";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile/profile";
import Address from "./components/profile/address";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route
        path="/dashboard"
        element={
          <>
            <DrawerAppBar></DrawerAppBar>
            <Dashboard></Dashboard>
          </>
        }
      ></Route>
      <Route
        path="/profile"
        element={
          <>
            <DrawerAppBar></DrawerAppBar>
            <Profile />
          </>
        }
      ></Route>
      <Route path={"/address"} element={<Address />} />
    </Routes>
  );
}

export default App;
