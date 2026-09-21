import { Route, Routes } from "react-router";
import { Header } from "./components/Header/Header";
import { MainPage } from "./Pages/MainPage/MainPage";
import { DevelopersPage } from "./Pages/DevelopersPage/DevelopersPage";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";
import { UsersPage } from "./Pages/UsersPage/UsersPage";
import { Footer } from "./components/Footer/Footer";
import { MessengerPage } from "./Pages/MessengerPage/MessengerPage";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/messenger" element={<MessengerPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
