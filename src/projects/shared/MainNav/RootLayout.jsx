import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className="content">
      <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
