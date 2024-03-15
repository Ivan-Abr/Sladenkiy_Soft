import React, {useState} from "react";
import {IFactor, ILayer} from "../../models";
import FactorService from "../../services/FactorService";
import {ErrorMessage} from "../ErrorMessage";

const factorData: IFactor = {
    factorId: Math.random()*10 + 10,
    factorName:"",
    factorShortName:""
}

interface createFactorProps{
    onCreate:(factor:IFactor)=>void
}

const inputStyle = "border py-2 px-4 mb-2 w-full outline-0"

export function CreateNewFactor({onCreate}:createFactorProps){
    const [value, setValue] = useState('')
    const [sname, setSname] = useState('')
    const[error, setError]=useState('')
    
    const SubmitHandler = async (event: React.FormEvent)=>{
        event.preventDefault()
        setError('')
        
        if (value.trim().length ===0){
            setError('Please, enter valid value')
            return
        }

        if (sname.trim().length ===0){
            setError('Please, enter valid sname')
            return
        }
        
        
        factorData.factorName = value
        factorData.factorShortName = sname
        const response = await FactorService.createFactor(factorData)
        onCreate(response.data)
    }

    return(
        <form onSubmit={SubmitHandler} className="mb-3">
            <input
                id="name"
                type="text"
                className={inputStyle}
                placeholder="Enter factor name"
                value={value}
                onChange={event => setValue(event.target.value)}
            ></input>
            <input
                id="sname"
                type="text"
                className={inputStyle}
                placeholder="Enter factor shortname"
                value={value}
                onChange={event => setSname(event.target.value)}
            ></input>
            {error &&<ErrorMessage error={error}/>}
            <button type="submit">Save</button>
        </form>
    )

}