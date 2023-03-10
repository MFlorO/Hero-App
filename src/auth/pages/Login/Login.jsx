import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';

const Login = () => {

  const { login } = useContext(AuthContext) //Obtengo los valores del context

  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastpath') || '/'    // Busco en el localtorage la ultima ruta. Si hay me lleva a esa sino a "/"

    login('Florencia Oldani') //Ejecuto la funcion que creamos en el provider

    navigate(lastPath, { replace: true })
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <button className='btn btn-primary' onClick={onLogin}>Login</button>
    </div>
  )
}

export default Login