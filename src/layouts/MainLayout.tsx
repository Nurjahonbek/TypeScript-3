import { Outlet } from "react-router-dom"
import Navbar from '../layouts/MainLayout'
import { Box } from "@mui/material"

function MainLayout() {
  return (
    <>
    <Navbar />
    <Box component='main'>
        <Outlet />
    </Box>
    </>
  )
}

export default MainLayout
