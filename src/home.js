import { Box, Container, Typography } from '@mui/material'
import CustomBox from './components/CustomBox'
import { useLocal } from './hooks/useLocal'

const Home = () => {
  const [countries, setCountries] = useLocal('countries', '')
  const [languages, setLanguages] = useLocal('languages', '')
  const [continents, setContinents] = useLocal('continents','')

  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        Home page
      </Typography>

      {countries && (
        <CustomBox Title="Countries:" Favorites={Object.values(countries)} />
      )}

      {languages && (
        <CustomBox Title="Languages:" Favorites={Object.values(languages)} />
      )}

      {continents && (
        <CustomBox Title="Continents:" Favorites={Object.values(continents)} />
      )}
    </Container>
  )
}

export default Home
