import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";

const HomePage = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};

export default HomePage;
