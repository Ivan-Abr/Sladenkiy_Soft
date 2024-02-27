import React, {useState} from "react";
import {IOrg} from "../models";
import OrgService from "../services/OrgService";
import {ErrorMessage} from "./ErrorMessage";


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


        return(
            <form onSubmit={SubmitHandler}>
                <input
                    type="text"
                    className="border py-2 px-4 mb-2 w-full outline-0"
                    placeholder="Enter product title..."
                    value = {value}
                    onChange = {event => setValue(event.target.value)}
                />
                {error && <ErrorMessage error={error}/>}
                <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>

            </form>
        )




    }

}
