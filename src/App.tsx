import { useState } from "react";
import { Header_block } from "./header"
import './App.css';
import { AppRoutes } from "./Routes";

function App() {
  let count_comentario = 0
  
  const [coment, setComent] = useState<string[]>([
    "coment 1", "coment 2", "coment 3"
  ])

function addComent() {
  setComent([... coment, `coment ${coment.length + 1}`])
}

  return (
  <div>

    <AppRoutes></AppRoutes>
    {coment.map(coment => {
      return <Header_block text={coment}/>
    })}

      {/* // <p><Header_block text = "TITLE"/></p>
      // <p><Header_block/></p>
      // <p><Header_block/></p> */}
      
      <button className="addComment__button" onClick={addComent} style= {{
        backgroundColor: '#e6d7c8',
        padding: '10px 20px'

        
      }}
      >Adcionar comentário</button>
  </div>

  );


};
export default App
