import React from 'react'
import LayoutDashbord from './LayoutDashbord'
import Overview from './Overview'


const UserDashboard = () => {
  return (
    <LayoutDashbord content={<Overview/>} />
  )
}

export default UserDashboard