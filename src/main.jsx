import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root'
import Home from './components/Home'
import Knowmore from './components/KnowMore/Knowmore'
import Shop from './components/Shop/Shop'
import Templete from './components/Products/Templete'
import LightSystem from './components/Products/LightSystem'
import WindowCharger from './components/Products/WindowCharger'
import SecurityCamera from './components/Products/SecurityCamera'
import OffgrideCombo from './components/Products/OffgrideCombo'
import WaterTurbine from './components/Products/WaterTurbine'
import VendorList from './components/Vendors/VendorList'
import Place from './components/Vendors/Place'
import Ahmedabad from './components/Vendors/Ahmedabad'
import Gandhinagar from './components/Vendors/Gandhinagar'
import Surat from './components/Vendors/Surat'
import BeringBlock from './components/Products/BeringBlock'
import VerticalTurbinePump from './components/Products/VerticalTurbinePump'
import Htc from './components/Products/Htc'
import AboutUs from './components/AboutUs/AboutUs'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='/' element={<Home />} />
      <Route path='More' element={<Knowmore />} />
      <Route path='Shop' element={<Shop />} />
      <Route path='Template' element={<Templete />} />
      <Route path='LightSystem' element={<LightSystem />} />
      <Route path='WindowCharger' element={<WindowCharger />} />
      <Route path='SecurityCamera' element={<SecurityCamera />} />
      <Route path='OffgrideCombo' element={<OffgrideCombo />} />
      <Route path='WaterTurbine' element={<WaterTurbine />} />
      <Route path='VendorList' element={<VendorList />} />
      <Route path='Place' element={<Place />} />
      <Route path='Ahmedabad' element={<Ahmedabad />} />
      <Route path='Gandhinagar' element={<Gandhinagar />} />
      <Route path='Surat' element={<Surat />} />
      <Route path='BeringBlock' element={<BeringBlock />} />
      <Route path='VerticalTurbinePump' element={<VerticalTurbinePump />} />
      <Route path='Htc' element={<Htc />} />
      <Route path='AboutUs' element={<AboutUs />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
