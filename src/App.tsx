import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "@/styles";
import routes from "@/routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
