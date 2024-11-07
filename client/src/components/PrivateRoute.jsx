import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
    const { currentUser } = useSelector(state => state.user)
  return currentUser ? <Outlet/> : <Navigate to ="/sign-in" />
  // when there is a current user, show the outlet, 
  // when there is not, navigate to sign in 
  
}
