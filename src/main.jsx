import { createRoot } from 'react-dom/client'
import BT1_HomeComponent from './components/BT1_HomeComponent'
//import css
import "./css/index.css";
import DataBinding from './databinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';



createRoot(document.getElementById('root')).render(
  <>
   {/* <BT1_HomeComponent /> */}
   {/* <DataBinding /> */}
   <HandleEvent />
  
  </>
)



