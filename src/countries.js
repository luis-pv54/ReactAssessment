import { useEffect, useState } from 'react'
import {
  Typography,
  Container,
  List,
  Box,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogContent,
  ListItem,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import { Info } from '@mui/icons-material'
import Button from './Button.jsx'
import { useLocal } from './hooks/useLocal.js'

const COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
      phone
      languages {
        code
        name
        native
      }
      currency
      emoji
      emojiU
      states {
        name
        code
      }
    }
  }
`

const COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      code
      name
      phone
      languages {
        code
        name
        native
      }
      currency
      emoji
      emojiU
      states {
        name
        code
      }
    }
  }
`

const Countries = () => {
  const [open, setOpen] = useState(false)
  const [countryInfo, setCountryInfo] = useState([])
  const [countriesFavorite, setCountriesFavorite] = useLocal('countries', '')
  const [favorites, setFavorites] = useState()

  useEffect(() => {
    setFavorites(Object.keys(countriesFavorite).length)
  }, [countriesFavorite])

  const { loading, error, data, refetch } = useQuery(COUNTRIES)

  if (loading) return <>loading...</>
  if (error) return <>error...</>

  const countries = data.countries

  const addFav = (favorite) => {
    setCountriesFavorite({
      ...countriesFavorite,
      [favorite?.code]: { name: favorite?.name },
    })
  }

  const deleteFav = (code) => {
    delete countriesFavorite[code]
    setCountriesFavorite({ ...countriesFavorite })
  }

  const isFavorite = (code) => {
    const storeFavorite = Object.keys(countriesFavorite)
    return storeFavorite.includes(code)
  }

  const increaseDecrease = (value, action) => {
    if (action === 1) addFav(value)
    else deleteFav(value?.code)
  }

  const countriesWithStates = countries.filter(
    (country) => country.states.length > 0
  )

  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        Countries
      </Typography>
      <Box>
        <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
          {countries.length} Countries
        </Box>
        <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
          {countries.length} favorites
        </Box>
        <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
          {countriesWithStates.length} Countries with states
        </Box>
        <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
          {favorites} favorites
        </Box>
        {countries.map((country) => (
          <Box
            key={country.code}
            sx={{
              padding: '.5rem 0rem',
              color: country.states.length > 0 ? 'blue' : '#999',
            }}
          >
            <Button
              onClick={(action) => increaseDecrease(country, action)}
              Favorite={isFavorite(country?.code)}
            />
            <a
              href="#"
              onClick={() => {
                setCountryInfo(country)
                setOpen(true)
              }}
            >
              {country.emoji} {country.name} {country.currency}{' '}
              {country.states.length > 0 && country.states.length}{' '}
              {country.states.length > 1 && 'States'}
              {country.states.length === 1 && 'State'}
            </a>
          </Box>
        ))}
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <List>
            <ListItem>Name: {countryInfo?.name}</ListItem>
            <ListItem>Code: {countryInfo?.code}</ListItem>
            <ListItem>Currencey: {countryInfo?.currency}</ListItem>
            <ListItem>Emoji: {countryInfo?.emoji}</ListItem>
            <ListItem>Phone: {countryInfo?.phone}</ListItem>
            <ListItem>States: {Number(countryInfo?.states?.length)}</ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </Container>
  )
}

export default Countries
