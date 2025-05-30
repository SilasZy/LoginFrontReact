

import './App.css'
import { CardLogin } from './components/Card'
import { FormCadastro } from './components/FormCadastro';
import {RotaTeste} from './components/RotaTeste'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutResponsive  from './Desafio002/LayoutResponsive'; 
function App() {
  //agora ta certo é dentro de src

  return (

    
    <>
   

<Router>
<Routes>
 <Route path='/' element={<CardLogin/>}/>
<Route path='/Rota' element={<RotaTeste/>}/>
<Route path='/Form_Cadastro' element={<FormCadastro/>}/>
<Route path='/Layout' element={<LayoutResponsive/>}/>
</Routes>
</Router>


</>
  )
}

export default App
