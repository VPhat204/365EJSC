import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import AllMovies from "./pages/AllMovie";
import MovieDetail from "./pages/Detail";
import WatchMovie from "./pages/Watch";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import AdminPage from "./pages/AdminPage/AdminPage";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminPage />
              </AdminRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/danh-sach" element={<AllMovies />} />
          <Route path="/thong-tin" element={<MovieDetail />} />
          <Route path="/xem-phim" element={<WatchMovie />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
