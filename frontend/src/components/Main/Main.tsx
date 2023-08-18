import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppBar from '../uiParts/appBar/AppBar'
import Home from '../pages/home/Home'
import TravelRecord from '../pages/travelRecord/TravelRecord'
import Picture from '../pages/picture/Picture'

export type MainProps = {
  signOut?: (data?: any) => void
  user?: any
}

const Main: React.FC<MainProps> = (_props) => {
  return (
    <main>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel-record/" element={<TravelRecord />} />
          <Route
            path="/travel-record/{travelId}/{pictureId}"
            element={<Picture />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default Main
