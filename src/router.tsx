

import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detalhes } from "./pages/Detalhes";
import { Layout } from "./components/Layout";

const routes = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
        {path:"/", element: <Home/>},
        {path:"/detalhes/:animal", element: <Detalhes/>}
    ]
  }
])

export {routes}