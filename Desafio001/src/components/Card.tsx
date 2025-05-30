//aqui eu to quebranco a imagem em componentes pra deixar dentro do card
import  IconHuman from '../assets/icon-h.jpg';
//colocar form submit provávelmente 
//resolveu meu negocio com outline none 
//inline-flex text-black font-black ms-20 mt-5 text-sm
//rounded pra circular o botao e deixar ele diferente
import Google from '../assets/G-google.png';
import { useNavigate } from 'react-router-dom';

//o erro era que eu deveria colocar nessa chave ai 


export const CardLogin = () =>   {
const navigate = useNavigate();

    return(
        <div className=" Card flex justify-center mt-11">
        <div className="card-body bg-indigo-700 p-20 text-lg ">
            <img src={IconHuman} alt="Imagem de um Homem" height={100} width={100} className='ms-40' />
            <p className='text-black font-black text-lg mt-5'>Seu e-mail</p>
                <input type="email" className=' w-full bg-indigo-700 border-b-[2px] border-b-gray-950 outline-none' name='Email' />
                <p className='text-black font-black text-base mt-5'>Password</p>
                <input type="password" className='w-full bg-indigo-700 border-b-[2px] border-b-gray-950 outline-none' name='Password' />
                <div className='flex justify-start'>
                    <input type="checkbox" name="checkbox" id="checkboxID" className='mt-5' />
                    <p className='inline-flex  text-black font-black  ms-2 mt-8 text-sm'>Remember-me</p>

                    <button onClick={() => { navigate('/Layout')


                    }} type="submit" className="bg-blue-950 ms-36 mt-4  text-white rounded-full  p-3  px-10">LOG IN</button>

                </div>
             
{/* underline deixa sublinhado desse jeito aqui  */}

                <p className='mt-5 text-center font-black'> não tem conta?  <button> <span  className='text-blue-300 ' onClick={() => {
navigate('/Form_Cadastro');

                }}>Cadastre-se</span></button> </p>

<div className='Center-button flex justify-center mt-5 '>


<div className='container-button w-48 bg-white h-16 rounded-lg '>

<div className='center-container flex justify-start'>
    
{/* usar whitespace nowwrap pra nao quebrar a linha */}

<img src={Google} alt="Imagem de um Homem" height={50} width={50} className='ms-0 mt-5 ' />
<p className='mt-6 ms-0 text-sm inline whitespace-nowrap text-BlackGray font-bold'>Entre com o Google</p>
</div>
</div>
</div>


        
        </div>


    </div>

    )
    
}
    
   




    

