import axios from 'axios'
//This is axios instance for api calls
export const axiosInstance=axios.create({})
export const apiConnector=(method,url,bodyData,headers,params)=>{
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data:bodyData? bodyData:null,
        headers:headers? headers:null,
        params:params? params:null
    })
}