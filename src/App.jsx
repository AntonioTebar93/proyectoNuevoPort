import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react"; // solo si realmente lo usas
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects} from "./pages/Projects";
import { NotFound } from "./pages/NotFound";


function App() {
  const [count, setCount] = useState(0); // puedes eliminar esto si no lo usas

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;