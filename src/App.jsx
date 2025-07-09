import InvestmentCalculator from "./projects/InvestmentCalculator/Main/InvestmentCalculator";
import ReactEssential from "./projects/ReactEssentials/Main/ReactEssential";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./projects/shared/MainNav/RootLayout";
import TikTakToe from "./projects/TicTacToe/Main/TikTakToe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      { path: "/ReactEssentials", element: <ReactEssential /> },
      { path: "/TikTakToe", element: <TikTakToe /> },
      { path: "/InvestmentCalculator", element: <InvestmentCalculator /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
