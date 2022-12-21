import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CustomBox = ({ Title, Favorites = [] }) => {
  return (
    <Box
      sx={{
        padding: '1rem',
        marginTop: '20px',
        backgroundColor: '#d1d5d9',
        borderRadius: '10px',
      }}
    >
      <Typography variant="h6"> {Title} {Favorites.length} {Favorites.length > 0 ? 'favorites': 'favorite'}</Typography>
      {Favorites.map((favorite) => ` ${favorite.name},`)}
    </Box>
  )
}

export default CustomBox
