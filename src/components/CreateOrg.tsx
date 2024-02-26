import React, {useState} from "react";
import {IOrg} from "../models";
import OrgService from "../services/OrgService";


const orgData: IOrg = {
    orgId:16,
    orgName:"",
    orgAnnot:"",
    orgContacts:""
}

interface CreateOrgProps{
    onCreate:(product: IOrg)=>void
}

export function CreateOrg({onCreate}: CreateOrgProps){
    const [value, setValue] = useState('')
    const [error, setError]=useState('')

    const SubmitHandler = async (event: React.FormEvent)=>{
        event.preventDefault()
        setError('')
        if (value.trim().length === 0){
            setError('Enter valid title.')
            return
        }
        orgData.orgName = value
        const response = await OrgService.createOrg(orgData)


        // return(
        // //     <form onSubmit = {SubmitHandler}
        // //     <input
        // // />
        // //     ></form>
        // // )




    }

}
