import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities and working on startups. 
            I am especially intrested in projects that aim to improve our everyday lives.
            If you have any requests or questions, don't hesitate to contact me on LinkedIn.
          </p>
        </div>
        <div className="info-map">
          Nathan Santiago
          <br />
          United States,
          <br />
          Mint Hill, NC <br />
          <br />
          {/* <span>placeholder@gmail.com</span> */}
        </div>
        <div className="map-wrap">
          <MapContainer center={[35.1735, -80.6570]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* <Marker position={[35.912056, -79.051250]}>
              <Popup>Old Well</Popup>
            </Marker> */}
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact