import axios from "axios";
import {IOrg} from "../models";

const ORG_API_URL = 'http://localhost:8080/dm/v1/org';

interface OrgData{
    orgName: string;
    orgAnnot: string;
}


const OrgService = {
    getOrgs: ()=>{
        return axios.get(ORG_API_URL);
    },

    editOrg:(orgId: number)=>{
        const data: OrgData ={
            orgName:"Valera",
            orgAnnot:"Bebera"
        };
        return axios.put(ORG_API_URL+orgId, data);
    },

    deleteOrg:(orgId:number)=>{
    return axios.delete(ORG_API_URL+orgId);
    },

    createOrg:(org: IOrg)=>{
        const data:IOrg ={
          orgId:org.orgId,
          orgName:org.orgName,
          orgAnnot:org.orgAnnot,
          orgContacts:org.orgContacts
        };
         return axios.post(ORG_API_URL, data)
    }

};

export default OrgService;