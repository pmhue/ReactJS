import { createRoot } from 'react-dom/client'
import BT1_HomeComponent from './components/BT1_HomeComponent'
//import css
import "./css/index.css";
import DataBinding from './databinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import RenderCondition from './render_condition/RenderCondition';
import DemoState from './RenderStatement/DemoState';
import DemoChangeNumber from './RenderStatement/DemoChangeNumber';
import DemoChangeColor from './RenderStatement/DemoChangeColor';
import DemoTinker from './RenderStatement/DemoTinker';
import DemoStyle from './StyleComponent/DemoStyle';
import DemoProps from './Props/DemoProps';



createRoot(document.getElementById('root')).render(
  <>
   {/* <BT1_HomeComponent /> */}
   {/* <DataBinding /> */}
   {/* <HandleEvent /> */}
    {/* <RenderCondition /> */}
    {/* <DemoState /> */}
    {/* <DemoChangeNumber /> */}
    {/* <DemoChangeColor /> */}
    {/* <DemoTinker /> */}
    {/* <DemoStyle /> */}
    <DemoProps />
    
  </>
)



