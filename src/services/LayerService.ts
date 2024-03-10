import axios from "axios";
import {ILayer, IOrg} from "../models";


const LAYER_API_URL = 'http://localhost:8080/dm/v1/layer'

const LayerService = {
    getLayers:()=>{
      return axios.get(LAYER_API_URL)
    },

    editLayer:(layerId: number, layer: ILayer)=>{
        const data: ILayer = {
            layerId: layerId,
            layerName: layer.layerName
        };
        return axios.put(LAYER_API_URL+"/"+layerId,data);
    },

    deleteLayer:(layerId:number)=>{
        return axios.delete(LAYER_API_URL+"/"+layerId);
    },





};

export default LayerService;