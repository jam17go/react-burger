import AppHeader from "../app-header/app-header.js";
import styles from "./app.module.css";
import { loadIngredients } from "../../services/burger-ingredients/actions.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { HomePage } from "../../pages/home-page";
import { RegisterPage } from "../../pages/register-page";
import { LoginPage } from "../../pages/login-page";
import { ForgotPasswordPage } from "../../pages/forgot-password-page";
import { ResetPasswordPage } from "../../pages/reset-password-page";
import { ProfilePage } from "../../pages/profile-page";
import { IngredientsPage } from "../../pages/ingredients-page";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { checkUserAuth } from "../../services/user/actions";
import { Error } from "../error/error";
import { ProfileTab } from "../profile/profile-tab";
import { OrderHistoryTab } from "../profile/order-history-tab";
import { IngredientModal } from "../burger-ingredients/ingredient-modal/ingredient-modal";

function App() {
  const dispatch = useDispatch();

  let location = useLocation();
  let state = location.state;

  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(loadIngredients());
  }, []);

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={<OnlyUnAuth component={<LoginPage />} />}
          />
          <Route
            path="/register"
            element={<OnlyUnAuth component={<RegisterPage />} />}
          />
          <Route
            path="/forgot-password"
            element={<OnlyUnAuth component={<ForgotPasswordPage />} />}
          />
          <Route
            path="/reset-password"
            element={<OnlyUnAuth component={<ResetPasswordPage />} />}
          />
          <Route
            path="/profile"
            element={<OnlyAuth component={<ProfilePage />} />}
          >
            <Route index element={<ProfileTab />} />
            <Route path="profile-tab" element={<ProfileTab />} />
            <Route path="order-history-tab" element={<OrderHistoryTab />} />
          </Route>
          <Route path="/ingredients/:id" element={<IngredientsPage />} />
          <Route
            path="*"
            element={<Error errorText={"Ошибка 404 - страница не найдена"} />}
          />
        </Routes>

        {state?.backgroundLocation && (
          <Routes>
            <Route path="/ingredients/:id" element={<IngredientModal />} />
          </Routes>
        )}
      </DndProvider>
    </div>
  );
}

export default App;
