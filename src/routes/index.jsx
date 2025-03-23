// import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import WargabinaanForm from '../pages/WargabinaanForm/FormInput';
import NarapidanaList from '../pages/NarapidanaList';
import WargabinaanDetail from '../pages/DetailWbp';
import EditWargabinaanForm from '../pages/UpdateWbp';
import AdminPanel from '../pages/AdminPanel';
import PengunjungDetail from '../pages/AdminPanel/PengunjungDetail';
import PengunjungList from '../pages/KunjunganList';
import EditPengunjungForm from '../pages/UpdatePengunjung';
import CreateBarangTitipan from '../pages/UpdatePengunjung/CreateBarangTitipanModal';
import AddPengunjungForm from '../pages/CreatePengunjung';
import HomePage from '../pages/Dashboard';
import OTPPage from '../pages/Register/Otp';
import useAuthStore from '../store/useAuthStore';
import NotFound from '../pages/404'
import { useEffect } from 'react';
import { isTokenExpired } from '../lib/authUtils';
import FormExcel from '../pages/WargabinaanForm/FormFile';


const Index = () => {
  const {authUser, logout} = useAuthStore();

//   useEffect(() => {
//     if (authUser && authUser.token) {
//         if (isTokenExpired(authUser.token)) {
//             logout(); // Hapus token jika expired
//             window.location.href = '/login'; // Arahkan ke halaman login
//         }
//     }
// }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element:  
      authUser === null ? 
      <Login /> 
      :
          <HomePage /> 
      
    },
    {
      path: '/wbp-list',
      element: 
      // authUser === null ? <Login /> :
          <NarapidanaList />
      
    },
    {
      path: '/upload',
      element: 
      // authUser == null ? <Login /> :
          <Home />
      
    },
    {
      path: '/register',
      element:
      //  !authUser ?
          <Register /> 
          // : <HomePage />
      
    },
    {
      path: '/login',
      element: 
      // !authUser ?
          <Login /> 
          // : <HomePage />
      
    },
    {
      path: '/wargabinaan-form',
      element: 
      // authUser == null ? <Login /> :
          <WargabinaanForm />
      
    },
    {
      path: '/wargabinaan-form-excel',
      element: 
      // authUser == null ? <Login /> :
          <FormExcel />
      
    },

    {
      path: '/detail-wargabinaan/:id',
      element: 
      // authUser == null ? <Login /> :
          <WargabinaanDetail />
      
    },
    {
      path: '/update-wargabinaan/:id',
      element: 
      // authUser == null ? <Login /> :
          <EditWargabinaanForm />
      
    },
    {
      path: '/admin-panel',
      element: 
      // authUser == null ? <Login /> :
          <AdminPanel />
      
    },
    {
      path: '/pengunjung/:kode',
      element:
      //  authUser == null ? <Login /> :
          <PengunjungDetail />
      
    },
    {
      path: '/pengunjung',
      element:
      //  authUser == null ? <Login /> :
          <PengunjungList />
      
    },
    {
      path: '/update-pengunjung/:kode',
      element:
      //  authUser == null ? <Login /> :
          <EditPengunjungForm />
      
    },
    {
      path: '/create-titipan',
      element: 
      // authUser == null ? <Login /> :
          <CreateBarangTitipan />
      
    },
    {
      path: '/create-pengunjung',
      element: 
      // authUser == null ? <Login /> :
          <AddPengunjungForm />
      
    },
    {
      path: '/otp',
      element: 
          <OTPPage />
      
    },
    {
      path: '*', 
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Index;
