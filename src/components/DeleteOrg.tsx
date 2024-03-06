import React from "react";
import OrgService from "../services/OrgService";



export function DeleteOrg(orgId: number){

    return(
        <form>
            <h3>Are you sure?</h3>
            <button onClick={()=>OrgService.deleteOrg(orgId)}>Yes</button>
        </form>
    )
}