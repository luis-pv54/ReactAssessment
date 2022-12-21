import React, {useState, useEffect} from 'react'
import { FaStar } from 'react-icons/fa';
import Button from './Button.jsx'
import { useLocal } from './hooks/useLocal.js'
 
import {
    Box,
    Container,
    Typography,
    List,
    ListItem
  } from '@mui/material'
  import { useNavigate } from 'react-router-dom'
  import { gql, useQuery } from '@apollo/client'
  
  const CONTINENTS = gql`
    query Continents {
        continents {
        code
        name
        countries {
          emoji
        }
        }
  }
  `
  
  const Continents = () => {
    const [favorites, setFavorites] = useState(0);
    const [continentsInfo, setContinentsInfo] = useState([]);
    const [continentsFavorite, setContinentsFavorite] = useLocal('continents', '')

    useEffect(() => {
      setFavorites(Object.keys(continentsFavorite).length)
    }, [continentsFavorite])

    const { loading, error, data, refetch } = useQuery(CONTINENTS)

    if (loading) return <>loading...</>
    if (error) return <>error...</>
  
    const continents = data.continents

    const addFav = (favorite) => {
      setContinentsFavorite({
        ...continentsFavorite,
        [favorite?.code]:{ name: favorite?.name},  
      })
    }

    const deleteFav = (code) => {
      delete continentsFavorite[code]
      setContinentsFavorite({...continentsFavorite})
    }

    const isFavorite = (code) => {
      const storeFavorite = Object.keys(continentsFavorite)
      return storeFavorite.includes(code)
    }

    // const handleClick = (value) => {
    //   increaseDecrease(value);
    //   addContFav(value);
    // }

    const increaseDecrease = (value, action) => {
      // setFavorites(favorites+(value)); 
      if(action === 1) addFav(value)
      else deleteFav(value?.code)      
    }

    
    return (
        <Container>
        <Typography variant='h1' sx={{ textAlign: 'center' }}>
          Continents
        </Typography>
        <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
          {favorites} Continents
        </Box>
  
        <List>
          {continents.map(continent => (
            <ListItem key={continent.code}>
              <Button 
                className={'holi'}
                // onClick={handleClick}
                onClick={(action) => increaseDecrease(continent,action)}
                Favorite={isFavorite(continent?.code)}
              ></Button>
              {continent.code} - {continent.name}
            </ListItem>
          ))}
       
        </List>
        
      </Container>
    )
  }
  
export default Continents