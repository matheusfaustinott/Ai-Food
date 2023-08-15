import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import VendasPage from './VendasPage';
import axios from 'axios';

const RoutesComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser) {
      axios.post('http://localhost:3000/login/check', { token })
        .then((response) => {
          if (response.data.valid) {
            setUser(JSON.parse(storedUser));
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/vendas' element={<VendasPage user={user} />} />
        {/* Outras rotas */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
