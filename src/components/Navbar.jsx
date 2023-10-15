import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import { SearchBar } from './index'

export const Navbar = () => {
  return(
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position: 'sticky', background: "#000", top: 0, justifyContent: "space-between" }}
  >
    <Link to="/" style={{display: 'flex' , alignItems:'center'}}>
      <img src={logo} alt='logo' height={50}/>
    </Link>
    <SearchBar />
  </Stack>
  )
 
}

