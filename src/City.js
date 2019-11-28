import React from 'react'
import styled from 'styled-components/macro'
import Place from './Place'
import PropTypes from 'prop-types'

export default function City({ places }) {
  return (
    <div>
      <CitySection city={places[0].city}>--- {places[0].city} ---</CitySection>
      {renderPlaces()}
    </div>
  )

  function renderPlaces() {
    return places
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(({ name, street, number, zip_code, city, categories }, index) => (
        <Place
          key={index}
          name={name}
          street={street}
          number={number}
          zip_code={zip_code}
          city={city}
          categories={categories}
        />
      ))
  }
}

const CitySection = styled.section`
  font-family: 'Noto Serif JP';
  color: #b77373;
  text-transform: uppercase;
  font-size: 1.5rem;
`
City.propTypes = {
  places: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
}