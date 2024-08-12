import React, { useState } from 'react'
import UserInfomation from './views/userInfomation'
import Div from './views/components/div/div'
import { light } from './assets/theme/light'
import { Outlet } from 'react-router-dom'
import Pages from './views/components/pages/pages'

const App =()=>{
  return (
    <Div column={true} background={light.background.main} minHeight="100vh" width="100vw"
    color={light.text.main} justyfi="center" align="center" >
      <Outlet/>
      <Pages/>
    </Div>
  )
}

export default React.memo(App);
