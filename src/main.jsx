import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css' //import css/index.css cua tailwind css
import BT1_HomeComponent from './components/BT1_HomeComponent'
//import HandleEvent từ file HandleEvent.jsx
import HandleEvent from './HandleEvent/HandleEvent'
//import DataBinding từ file DataBinding.jsx
import DataBinding from './databinding/DataBinding'
//import Render_Condition từ file Render_Condition.jsx
import Render_Condition from './Render_Condition/Render_Condition'
//import DemoState từ file DemoState.jsx
import DemoState from './RenderStatement/DemoState'
//import DemoChangeColor từ file DemoChangeColor.jsx
import DemoChangeColor from './RenderStatement/DemoChangeColor'
//import DemoChangeNumber từ file DemoChangeNumber.jsx
import DemoChangeNumber from './RenderStatement/DemoChangeNumber'
//import DemoTinker từ file DemoTinker.jsx
import DemoTinker from './RenderStatement/DemoTinker'
//import DemoStyle từ file DemoStyle.jsx
import DemoStyle from './StyleComponent/DemoStyle'


//import DemoProps từ file DemoProps.jsx
import DemoProps from './Props/Demoprops'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    {/* <BT1_HomeComponent></BT1_HomeComponent> */}
    {/* <DataBinding></DataBinding> */}
    {/* <HandleEvent></HandleEvent> */}
    {/* <Render_Condition></Render_Condition> */}
    {/* <DemoState></DemoState> */}
    {/* <DemoChangeColor></DemoChangeColor> */}
    {/* <DemoChangeNumber></DemoChangeNumber> */}
    {/* <DemoTinker></DemoTinker> */}
    {/* <DemoStyle></DemoStyle> */}
    <DemoProps></DemoProps>
    </>
  </StrictMode>,
)

