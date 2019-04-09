import axios from 'axios'
import api from './api'
function get(url,data) {
    return new Promise((resolve,reject)=>{
        let params = data || {};
        axios.get(url,{
            params,
            baseURL:api.HOST
        })
        .then(result=>{
            resolve(result);
        })
        .catch(error=>{
            reject(error);
        })
    })
}

function post(url,data) {
    return new Promise((resolve,reject)=>{
        let params = data || {};
        axios.post(url,params,{
            baseURL:api.HOST
        })
        .then(result=>{
            resolve(result);
        })
        .catch(error=>{
            reject(error)
        })
    })
}
export default {
    get,
    post
}