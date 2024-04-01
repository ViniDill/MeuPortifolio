import { BrowserRouter, Route, Routes as Rota } from "react-router-dom";
import PageNotFound from "../Screens/PageNotFound";
import Hello from "../Screens/Hello";
import RotaTeste from "../Screens/RotaTeste";
import Projects from "../Screens/Projects";

function Routes() {
  return (
    <BrowserRouter>
      <Rota>
        <Route path="/" element={<Hello />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="rota-teste" element={<RotaTeste />} />
        <Route path="projects" element={<Projects />} />
      </Rota>
    </BrowserRouter>
  );
}

export default Routes;