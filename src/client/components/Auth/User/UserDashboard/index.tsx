import React from 'react'
import LayoutDashboard from './LayoutDashboard'
import Overview from './Overview'


const UserDashboard = () => {
  return (
    <LayoutDashboard content={<Overview/>} />
  )
}

export default UserDashboard;