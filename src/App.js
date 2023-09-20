import { BrowserRouter } from "react-router-dom";

import Rutas from "./rutas/Rutas";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">    
        <Rutas/>
      </div>
    </BrowserRouter>
  );
}

export default App;
