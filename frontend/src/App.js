import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import { userState } from './user/recoil/user';
import { isEmptyObject } from './user/utils/jsFunction';

import axios from 'axios';
import PrivateRoute from './user/components/Layout';

import Login from './user/pages/Login';
import Main from './user/pages/main';
import Reset from './user/pages/Reset';
import MyInfo from './user/pages/MyInfo';
import Search from './user/pages/search';

import AdminMain from './admin/pages/AdminMain';
import AdminLoginPage from './admin/pages/AdminLoginPage';
import EmployeePage from './admin/pages/EmployeePage';
import ResourcePage from './admin/components/Resource/ResourcePage';

const App = () => {
  const [user, setUser] = useRecoilState(userState);
  const cookies = new Cookies();

  const accessToken = cookies.get('accessToken');

  useEffect(() => {
    if (accessToken === 'undefined') return;

    if (accessToken && isEmptyObject(user)) {
      axios
        .get(`${process.env.REACT_APP_SERVER_PORT}/mypage/view`, {
          headers: {
            Authorization: accessToken,
          },
        })
        //.then((res) => console.log(res))
        .then((res) => res.data.data[0])
        .then((data) =>
          setUser({
            userId: data.userId,
            birth: data.birth,
            deptName: data.deptName,
            email: data.email,
            empNo: data.empNo,
            gradeName: data.gradeName,
            no: data.no,
            phone: data.phone,
          }),
        );
    }
    console.log('user = ', user);
  }, [user, setUser, accessToken]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="main" element={<Main />} />
          <Route path="reset" element={<Reset />} />
          <Route path="info" element={<MyInfo />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="admin" element={<AdminMain />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/resource" element={<ResourcePage />} />
          <Route path="/admin/employee" element={<EmployeePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
