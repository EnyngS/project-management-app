import React from 'react';
import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomPage/WelcomePage';
import HomePage from './components/HomePage/HopePage';
import AuthPage from './components/AuthPage/AuthPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import './components/Header/Header.module.css';
const App = () => {
  return (
    <div className={styles.appWrapp}>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/AuthPage" element={<AuthPage />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
