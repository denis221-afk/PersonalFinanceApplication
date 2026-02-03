import { useAppSelector } from "../Store/hooksType";
import AppLayout from "../Components/AppLayout/AppLayout";
import AuthLayout from "../Components/AppLayout/AuthLayout";
import { BrowserRouter } from "react-router-dom";
import { useAuthListenerChange } from "../Hooks/useAuthListenerChange";
import { useLoading } from "../Hooks/useContextLoading";
import Loading from "../Components/Loading/Loading";
function App() {
  const { isLoading } = useLoading();
  useAuthListenerChange();
  const isAuthenticated: boolean = useAppSelector(
    (state) => state.auth.isAuthenticated,
  );

  return (
    <BrowserRouter>
      {isLoading ? <Loading /> : null}
      {isAuthenticated ? <AppLayout /> : <AuthLayout />}
    </BrowserRouter>
  );
}

export default App;
