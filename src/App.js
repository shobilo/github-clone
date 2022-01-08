import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/UI/Header";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setAuth } from './redux/user/actions'
import './styles/app.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const localIsAuth = localStorage.getItem('isAuth')
    if (localIsAuth){
      dispatch(setAuth(localIsAuth === 'true'))
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <AppRouter/>
      </BrowserRouter>
    </div>
    
  )
}

export default App;
