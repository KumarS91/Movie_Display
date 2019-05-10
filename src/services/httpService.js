import axios from 'axios';
import logger from './logService'
import {toast} from 'react-toastify';



axios.interceptors.response.use(null,error=>{
    const errorCheck=error.response&&error.response.status>=400&&error.response.status<500;
    if(!errorCheck){    
      logger.log("error is",error)
      toast("Something unexpected happened");
    }
    return Promise.reject(error)
  })

export function setJwt(jwt){
  axios.defaults.headers.common['x-auth-token']=jwt;
}

  export default{
      get:axios.get,
      post:axios.post,
      put:axios.put,
      delete:axios.delete,
      setJwt
  }