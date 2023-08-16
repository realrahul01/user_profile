import { Route, Routes } from "react-router-dom";
import AddUser from "../Pages/AddUser";
import Error from "../Pages/Error";
import route from "./route.json";
import MasterLayout from "../Layout/MasterLayout";
import Setting from "../Pages/Setting";
import Help from "../Pages/Help";
import Home from "../Pages/Home";
import User from '../Pages/User'
import Login from "../Pages/Login";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<MasterLayout/>}>
        <Route index element={<Home/>}/>
      <Route path={route.PROFILES}>
        <Route index element={<User />} />
        <Route path=":page" element={<User />} />
      </Route>
      <Route path={route.CREATE_USER} element={<AddUser />} />
      <Route path={route.SETTING} element={<Setting/>}/>
      <Route path={route.HELP} element={<Help/>}/>
      <Route path={route.LOGIN} element={<Login/>}/>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
    
  );
};
export default PageRoutes;
