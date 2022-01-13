import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/UI/Header";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setAuth, setIsUserLoading } from './redux/user/actions'
import { IS_AUTH } from './constants/localStorage'
import './styles/app.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const localIsAuth = localStorage.getItem(IS_AUTH) === "true"
    if (localIsAuth){
      dispatch(setAuth(localIsAuth))
    }
    dispatch(setIsUserLoading(false))
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
