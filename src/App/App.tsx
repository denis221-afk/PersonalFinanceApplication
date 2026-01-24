import { useAppSelector } from "../Store/hook-type";
import AppLayout from "../Components/AppLayout/AppLayout";
import AuthLayout from "../Components/AppLayout/AuthLayout";
import { BrowserRouter } from "react-router-dom";
function App() {
  const isAuthenticated: boolean = useAppSelector(
    (state) => state.auth.isAuthenticated,
  );
  return (
    <BrowserRouter>
      {isAuthenticated ? <AppLayout /> : <AuthLayout />}
    </BrowserRouter>
  );
}

export default App;
