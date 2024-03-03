import axios from "axios";
import {IOrg} from "../models";

const ORG_API_URL = 'http://localhost:8080/dm/v1/org';

interface OrgData{
    orgName: string;
    orgAnnot: string;
    orgContacts: string;
}

const names = ["Tarkov","Malenian","Maersk", "Jalopy","Kek"]
const annots  = ["Transport","Producement","Medicine","Food","Military"]
const contacts  = ["89607589467", "89345678432", "89657890654", "89546783452", "89999999999"]


const OrgService = {
    getOrgs: ()=>{
        return axios.get(ORG_API_URL);
    },

    editOrg:(orgId: number)=>{
        const data: OrgData ={
            orgName:names[Math.floor(Math.random() * names.length)],
            orgAnnot:annots[Math.floor(Math.random() * annots.length)],
            orgContacts:contacts[Math.floor(Math.random() * contacts.length)],
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