import React from 'react'
import LayoutDashbord from './LayoutDashboard'
import Overview from './Overview'


const UserDashboard = () => {
  return (
    <LayoutDashbord content={<Overview/>} />
  )
}

export default UserDashboard;