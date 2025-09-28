import { useState } from "react";
import Button from "./components/Button";
import Popup from "./components/Popup";


function App(){
   const [showModal, setShowModal] = useState(false);
  return (<div style={{
    display:"flex",
    width:"100vw",
    height:'100vh',
    justifyContent:'center',
    alignItems:'center'
   
    }}>

    <div onClick={() => setShowModal(true)}>
      <Button text={"EXPORT CODE"}
    />
    </div>
    {showModal && <Popup onClose={() => setShowModal(false)} />}

    

  </div>)
}


export default App;