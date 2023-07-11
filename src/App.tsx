import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/styles";
import theme from "@/styles/theme";
import routes from "@/routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
