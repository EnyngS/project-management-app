import React from 'react';
import { useSelector } from 'react-redux';
import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRouter from './router/AppRouter'

const App = () => {
	const user = useSelector((state:any) => state.settings)
	console.log(user)
  return (
    <div className={styles.appWrapp}>
      <Header />
		<div className={styles.content}>
		<AppRouter />
		</div>
      <Footer />
    </div>
  );
};

export default App;
