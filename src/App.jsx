import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PageRoutes from './routes/PageRoutes';
import "bootstrap-icons/font/bootstrap-icons.css";
import ThemeProvider from './contexts/ThemeContext';
import AuthProvider from './contexts/AuthContext';


function App() {

  return (
    <div  className="App">
      <AuthProvider>
      <ThemeProvider>
        <PageRoutes/>
      </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

export default App
