import { Outlet } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/dark-theme.css';
import './App.css';

function App() {
  const { isDark } = useTheme();

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

