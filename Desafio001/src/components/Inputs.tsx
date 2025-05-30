import { useState } from "react"
import Google from '../assets/G-google.png';
useState;

export const Input = () => {
const value = null;

//podendo ser sm pra telas menores
    return(
        <>

        <div className="flex flex-col md:flex-row gap-10">
    <div className="flex flex-col ">
     <p className="font-black">nome</p>
        <input type="text" name="nome" id="nomeID" className="border p-2 rounded  border-black  outline-none bg-gray-300 border-opacity-30 w-full me-10 " />
    </div>

    <div className="flex flex-col">
        <p className="font-black">Sobrenome</p>
        <input type="text" name="sobrenome" id="sobrenomeID" className="border p-2 rounded  border-black  outline-none bg-gray-300 border-opacity-30 w-full  me-10 " />
    </div>
</div>     
        <div className="flex flex-col md:flex-row gap-20  ">
        <div className="flex flex-col mt-5">
        <p className="font-black">CPF</p>
        <input type="number" name="cpf" id="cpfID" className="border p-2 rounded  border-black  outline-none bg-gray-300 border-opacity-30 w-full me-10 " />
        </div>       
              <div className="flex flex-row mt-6 gap-3">
                
<input type="checkbox" name="check" id="checkID" className="mt-5 w-10  accent-black bg-red-600 opaci "  />
<p className="text-start  mt-7 font-black" >Sou Estrangeiro</p>
              </div>
            </div>  
            
            
            
            <div className="flex flex-col md:flex-row gap-20 mt-10">
    <div className="flex flex-col ">
     <p className="font-black">Senha</p>
        <input type="text" name="senha" id="senhaID" className="border p-2 rounded  border-black  outline-none bg-gray-300 border-opacity-30 w-full me-10 " />
    </div>

    <div className="flex flex-col">
       <p className="font-black">Confirmar senha</p>
        <input type="text" name="confirmar" id="confirmarID" className="border p-2 rounded  border-black  outline-none bg-gray-300 border-opacity-30 w-full  me-10 " />
    </div>
</div>
            

<div className="flex flex-col mt-5 justify-start">
<div className="flex flex-col ">
<p className="font-black">Escolha seu País</p>
<select name="Select" id="selectID" className=" border-black border-2 outline-none bg-gray-300 border-opacity-30  w-full rounded-md me-5 mt-3">
                    
                    <option>{value}</option>
                    <option>Argentina</option>
                    <option>Brasil</option>
                    <option>Chile</option>
                    <option>Colombia</option>
                    <option>Estados Unidos</option>
                    <option>Inglaterra</option>
                    <option>Itália</option>
                    <option>México</option>
                    <option>Portugal</option>
                    <option>Rússia</option>
                    <option>Uruguai</option>
                </select>
</div>
</div>

           <div className="flex flex-row mt-5 ">

<input type="checkbox" name="check" id="checkID" className="mt-5 w-10 "  />
<p className="text-start  mt-7 font-black  md: text-sm"  >Quero receber ofertas, promoções exclusivas, cupons e novidades por e-mail.</p>	
           </div>
<button className=" bg-blue-600 rounded-lg  w-full p-5 mt-8 text-white  font-bold">
Criar Conta

</button>
<div className="flex justify-center mt-5">
    <div className="flex flex-row">
    <button className="w-80 p-1 bg-white pb-3 rounded-lg font-semibold font-nototai mt-5">
<img src={Google} height={50} width={50} alt="Imagem do Google" className="relative top-6" />
Entre com o Google
</button>
</div>
    </div>
            </>


    )
}
    //deixar desponsivo quando chegar em x tela aplicar um display block aos itens.
  

      








