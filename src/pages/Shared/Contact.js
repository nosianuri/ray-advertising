import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AnimatedLetters from '../../shared/AnimatedLetters/AnimatedLetters';
import './Contact.css';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  return (
    <>
    <div className="grid grid-cols-2 lg:grid-cols-2 gap-10 contact-page">
      <div className="text-zone px-10">
        <h1 className='text-5xl'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'u', 's']}
            idx={15}
          />
        </h1>
        <p>
          We are interested in work together opportunities - especially on ambitious
          or large projects. However, if you have any other requests or
          questions, don't hesitate to contact us using below form either.
        </p>
        <div className="contact-form">
          <form ref={form} >
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
              </li>
              <li className="half">
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li className="half">
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li >
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>

          
        </div>
      </div>
      <div>
      <div className="info-map">
        Slobodan Gajić,
        <br />
        Serbia,
        <br />
        Branka RadiČevića 19, 22000 <br />
        Sremska Mitrovica <br />
        <br />
        <span>nurinosia@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={[44.96366, 19.61045]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[44.96366, 19.61045]}>
            <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
          </Marker>
        </MapContainer>
      </div>
      </div>
      
    </div>
   
  </>
  )
}

export default Contact