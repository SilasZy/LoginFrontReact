
import MulherRoupa from "../assets/mulher-roupa.jpeg";

export default function MyComponent() {
    return (
      <div className="p-20">
        {/* Container Principal */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Texto */}
          <div>
            <p className="font-black text-lg">Layout Desktop</p>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold">
                Nossa moda é essencial para seu uso, temos as mais diversas roupas, venha ver a nossa Loja!
              </p>
              <p className="text-sm font-semibold">
                A moda é a expressão da sua personalidade, e aqui na nossa loja, você encontra as peças perfeitas para cada momento da sua vida.
              </p>
              <p className="text-sm font-semibold">Venha ver!</p>
            </div>
          </div>
  
          {/* Imagem */}
          <img
            src={MulherRoupa}
            height={120}
            width={120}
            alt="Roupa Social..."
            className="w-44 h-44 rounded-md shadow-lg border border-gray-300"
          />
        </div>
  
        {/* Divs com Cores Diferentes */}
        <div className="flex gap-5 mt-10">
          <div className="bg-red-500 p-10 w-32 h-32"></div>
          <div className="bg-green-500 p-10 w-32 h-32"></div>
          <div className="bg-blue-500 p-10 w-32 h-32"></div>
          <div className="bg-yellow-500 p-10 w-32 h-32"></div>
          <div className="bg-indigo-700 p-10 w-32 h-32"></div>
        </div>
      </div>
    );
  }
  