import "../utils/intercepter";

import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Index";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Page3D from "../Pages/3D";
import Policies from "../Pages/Policies";
import Search from "../Pages/Search";
import Pricing from "../Pages/Pricing";
import Frame from "../Pages/Frame";
import Admin from "../Admin/Layout";
import Dashboard from "../Admin/Page/Dashboard";
import CatagoryTable from "../Admin/Page/CategoryTable";
import ListOfContent from "../Admin/Page/ListOfContent";
import ImageComponent from "../Pages/ImagePage";
import { PrivateRoute } from "./PrivateRoute";
import TypeOfContent from "../Admin/Page/TypeOfContent";
import Tags from "../Admin/Page/Tags";
import UserTable from "../Admin/Page/UserTable";

const IfLogin = () => {
  return <Navigate to={"/"} />;
};
function RouteSelector() {
  const isLogged = localStorage.getItem("token") ? true : false;

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<HomePage />} />
        <Route path="/image" element={<ImageComponent />} />
        <Route path="/3d" element={<Page3D />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:dd/search/:tag" element={<Search />} />
        <Route path="/:dd/search/" element={<Search />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/frame/:id" element={<Frame />} />
        <Route element={<Admin />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/user" element={<UserTable />} />
          <Route path="/admin/test1" element={<h1>test1</h1>} />
          <Route path="/admin/test2" element={<h1>test2</h1>} />
          <Route path="/admin/invoices" element={<h1>Invoices</h1>} />
          <Route path="/admin/users" element={<h1>Users</h1>} />
          <Route path="/admin/tax-details" element={<h1>Tax Details</h1>} />
          <Route path="/admin/invoice-anal" element={<h1>Invoice Anal..</h1>} />
          <Route path="/admin/pricing" element={<h1>Pricing</h1>} />
          <Route path="/admin/documentation" element={<h1>Documentation</h1>} />
          <Route path="/admin/categorytable" element={<CatagoryTable />} />
          <Route path="/admin/listofcontent" element={<ListOfContent />} />
          <Route path="/admin/typeofcontent" element={<TypeOfContent />} />
          <Route path="/admin/tags" element={<Tags />} />
        </Route>
      </Route>
      <Route path="/signin" element={!isLogged ? <SignIn /> : <IfLogin />} />
      <Route path="/signup" element={!isLogged ? <SignUp /> : <IfLogin />} />
    </Routes>
  );
}

export default RouteSelector;
