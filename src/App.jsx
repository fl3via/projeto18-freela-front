import DetalhesDoProduto from "./Components/DetalhesDoProduto"
import AdicionarIten from "./Components/AdicionarItem"
import GerenciarItens from "./Components/GerenciarItens"
import TelaInicial from "./Components/TelaInicial"
import TelaLogin from "./Components/TelaLogin"
import Cadastro from "./Components/TelaCadastro"

import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/inicio" element={<TelaInicial />} />
          <Route path="/detalhes" element={<DetalhesDoProduto />} />
          <Route path="/adicionar" element={<AdicionarIten />} />
          <Route path="/gerenciamento" element={<GerenciarItens />} />

        </Routes>
      </BrowserRouter>




    </>
  )
}


