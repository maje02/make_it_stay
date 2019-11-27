import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Place({
  name,
  street,
  number,
  zip_code,
  city,
  categories,
}) {
  return (
    <PlaceBody>
      <PlaceName>{name}</PlaceName>
      <PlaceAddress>
        {street} {number}
      </PlaceAddress>
      <PlaceAddress>
        {zip_code} {city}
      </PlaceAddress>
      <PlaceCategories>{categories}</PlaceCategories>
    </PlaceBody>
  )
}
const PlaceBody = styled.section`
  position: relative;
  padding: 20px;
  margin: 20px;
  background: #f7f7f7;
  box-shadow: 0 10px 10px #0002;
`
const PlaceName = styled.h2`
  font-family: sans-serif;
  color: #637f68;
`

const PlaceAddress = styled.p`
  font-family: serif;
  font-size: 0.8em;
  color: #d8d8d8;
`
const PlaceCategories = styled.p`
  font-family: sans-serif;
  font-size: 0.8em;
  color: #b77373;
`

Place.propTypes = {
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  zip_code: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
}