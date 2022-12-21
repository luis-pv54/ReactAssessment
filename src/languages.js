import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, List, ListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { from, gql, useQuery } from '@apollo/client'
import Button from './Button.jsx'
import { useLocal } from './hooks/useLocal.js'

const LANGUAGES = gql`
  query Languages {
    languages {
      code
      name
      native
      rtl
    }
  }
`

const Languages = () => {
  const { loading, error, data, refetch } = useQuery(LANGUAGES)
  const [languagesFavorite, setLanguagesFavorite] = useLocal('languages', '')
  const [favorites, setFavorites] = useState()

  useEffect(() => {
    setFavorites(Object.keys(languagesFavorite).length)
  }, [languagesFavorite])

  const addFav = (favorite) => {
    setLanguagesFavorite({
      ...languagesFavorite,
      [favorite?.code]: { name: favorite?.name },
    })
  }

  const deleteFav = (code) => {
    delete languagesFavorite[code]
    setLanguagesFavorite({ ...languagesFavorite })
  }

  const isFavorite = (code) => {
    const storeFavorite = Object.keys(languagesFavorite)
    return storeFavorite.includes(code)
  }

  const increaseDecrease = (value, action) => {
    if (action === 1) addFav(value)
    else deleteFav(value?.code)
  }

  if (loading) return <>loading...</>
  if (error) return <>error...</>

  const languages = data.languages

  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        Languages
      </Typography>
      <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
        {languages.length} Languages
      </Box>
      <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
        {favorites} favorites
      </Box>

      <List>
        {languages.map((lang) => (
          <ListItem key={lang.code}>
            <Button
              onClick={(action) => increaseDecrease(lang, action)}
              Favorite={isFavorite(lang?.code)}
            />
            {lang.code} - {lang.name} - {lang.native}
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Languages
