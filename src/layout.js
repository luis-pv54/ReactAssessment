import { useState, useEffect } from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const [currentTab, setCurrentTab] = useState('home')
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/${currentTab}`)
  }, [currentTab])

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Tabs
          value={currentTab}
          onChange={(e, newValue) => setCurrentTab(newValue)}
        >
          <Tab value='home' label='home' />
          <Tab value='countries' label='countries' />
          <Tab value='languages' label='languages' />
          <Tab value='continents' label='continents' />
        </Tabs>
      </Box>
      <Outlet />
    </Box>
  )
}

export default Layout
