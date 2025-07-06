import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css' //import css/index.css cua tailwind css
import BT1_HomeComponent from './components/BT1_HomeComponent'
//import HandleEvent từ file HandleEvent.jsx
import HandleEvent from './HandleEvent/HandleEvent'
//import DataBinding từ file DataBinding.jsx
import DataBinding from './databinding/DataBinding'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    {/* <BT1_HomeComponent></BT1_HomeComponent> */}
    <DataBinding></DataBinding>
    <HandleEvent></HandleEvent>
    </>
  </StrictMode>,
)

