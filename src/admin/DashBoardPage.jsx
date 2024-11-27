import React from 'react'
import { Outlet } from 'react-router-dom';

const DashBoardPage = () => {
  return (
   <>
    <div>DashBoardPage</div>
    <Outlet/>
   </>
  )
}

export default DashBoardPage;