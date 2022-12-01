import * as React from 'react';
import { Navigate, useParams } from 'react-router-dom';

export default function Admin() {
  const params = useParams();
  if(params.user !== 'admin') {
    return <Navigate to='/' />;
  }
  return (
    <h1>TELA DE ADMINISTRAÇÂO!</h1>
  );
}