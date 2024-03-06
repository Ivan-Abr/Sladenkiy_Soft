import React, {useState} from "react";
import {IOrg, IOrgData} from "../models";
import OrgService from "../services/OrgService";



const orgData: IOrgData = {
    orgName:"",
    orgAnnot:"",
    orgContacts:"",
}

interface EditOrgProps{
    onEdit:()=>void
}


export function EditOrg({onEdit}: EditOrgProps){
    const [value, setValue] = useState('')
    const [annot, setAnnot] = useState('')
    const [contacts, setContacts] = useState('')

    const [error, setError] = useState('')

    const SubmitHandler = async (event: React.FormEvent, orgId: number) =>{
        event.preventDefault()
        setError('')


        if (value.trim().length === 0){
            setError('Please Enter valid value.')
            return
        }

        if (annot.trim().length === 0){
            setError('Please Enter valid annotation.')
            return
        }

        if (contacts.trim().length === 0){
            setError('Please Enter valid contacts.')
            return
        }

        orgData.orgName = value
        orgData.orgAnnot = annot
        orgData.orgContacts = contacts
        const response = await OrgService.editOrg(orgId,orgData)
        //onEdit(response)


    }



}