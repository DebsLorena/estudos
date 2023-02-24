import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Html from "./pages/Html";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";
import PreProcessadorCss from "./pages/PreProcessadorCss";
import FrameworkCss from "./pages/FrameworkCss"
import ControleDeVersao from "./pages/ControleDeVersao"
import ReactJS from "./pages/ReactJS"
import FrameworkReacjs from "./pages/FrameworkReacjs";
import FerramentasDeGerenciamentoReact from "./pages/FerramentasDeGerenciamentoReact"
import NextJs from "./pages/NextJs";
import WebServiços from "./pages/WebServiços";
import Apis from "./pages/Apis";
import TopicosImportantes from "./pages/TopicosImportantes";
import Extras from "./pages/Extras";
import BibliotecasReactjs from "./pages/BibliotecasReactjs";
import GerenciadoresDePacote from "./pages/GerenciadorDePacote";
import TypeScript from "./pages/TypeScript";
import Seguranca from "./pages/Segurança";
import Teste from "./pages/Teste";
import Acessibilidade from "./pages/Acessibilidade";
import SystemDesign from "./pages/SystemDesign";
import UxUi from "./pages/UxUi";
import Architecture from "./pages/Architeture";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/controledeversao" element={<ControleDeVersao />} />
        <Route path="/webservicos" element={<WebServiços />} />
        <Route path="/frameworkcss" element={<FrameworkCss />} />
        <Route path="/preprocessadorcss" element={<PreProcessadorCss />} />
        <Route path="/gerenciadoresdepacote" element={<GerenciadoresDePacote />} />
        <Route path="/reactjs" element={<ReactJS />} />
        <Route path="/apis" element={<Apis />} />
        <Route path="/acessibilidade" element={<Acessibilidade />} />
        <Route path="/frameworkreacjs" element={<FrameworkReacjs />} />
        <Route path="/bibliotecasreactjs" element={<BibliotecasReactjs />} />
        <Route path="/ferramentasdegerenciamentoreact" element={<FerramentasDeGerenciamentoReact />} />
        <Route path="/nextjs" element={<NextJs />} />
        <Route path="/typescript" element={<TypeScript />} />
        <Route path="/seguranca" element={<Seguranca />} />
        <Route path="/topicosImportantes" element={<TopicosImportantes />} />
        <Route path="/extras" element={<Extras />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/systemdesign" element={<SystemDesign />} />
        <Route path="/uxui" element={<UxUi />} />
        <Route path="/architecture" element={<Architecture />} />
      </Routes>
    </Router>
  );
}

export default App;
