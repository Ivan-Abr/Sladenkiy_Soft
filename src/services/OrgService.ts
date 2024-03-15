import axios from "axios";
import {IOrg, IOrgData} from "../models";

const ORG_API_URL = 'http://localhost:8080/dm/v1/org';




const OrgService = {
    getOrgs: ()=>{
        return axios.get(ORG_API_URL);
    },

    editOrg:(orgId: number, org: IOrg)=>{
        const data: IOrg ={
            orgId:orgId,
            orgName:org.orgName,
            orgAnnot:org.orgAnnot,
            orgContacts:org.orgContacts,
        };
        return axios.put(ORG_API_URL+"/"+orgId, data);
    },

    deleteOrg:(orgId:number)=>{
    return axios.delete(ORG_API_URL+"/"+orgId);
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