import axios from "axios";
import {IFactor} from "../models";

const FACTOR_API_URL = 'http://localhost:8080/dm/v1/factor'

const FactorService={

    getFactors:()=>{
        return axios.get(FACTOR_API_URL)
    },

    editFactor:(factorId:number, factor: IFactor)=>{
        const data: IFactor = {
            factorId: factorId,
            factorName: factor.factorName,
            factorShortName:factor.factorShortName
        }
        return axios.put(FACTOR_API_URL+"/"+factorId, data)
    },

    deleteFactor:(factorId: number)=>{
        return axios.delete(FACTOR_API_URL+"/"+factorId)
    },

    createFactor:(factor: IFactor)=>{
        const data: IFactor = {
            factorId: factor.factorId,
            factorName: factor.factorName,
            factorShortName:factor.factorShortName
        }
        return axios.put(FACTOR_API_URL, data)
    }
}

export  default FactorService