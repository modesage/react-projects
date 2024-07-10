import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Acoustic from './components/Genre/Acoustic/Acoustic.jsx'
import Jazz from './components/Genre/Jazz/Jazz.jsx'
import Metal from './components/Genre/Metal/Metal.jsx'
import Rock from './components/Genre/Rock/Rock.jsx'
import Synthwave from './components/Genre/Synthwave/Synthwave.jsx'
import Special from './components/Special/Special.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import SignIn from './components/SignIn/SignIn.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='acoustic' element={<Acoustic />} />
      <Route path='jazz' element={<Jazz />} />
      <Route path='metal' element={<Metal />} />
      <Route path='rock' element={<Rock />} />
      <Route path='synthwave' element={<Synthwave />} />
      <Route path='special' element={<Special />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
