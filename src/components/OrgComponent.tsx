
import React, {useContext, useEffect, useState} from "react";
import OrgService from "../services/OrgService";
import {IOrg} from "../models";
import {ModalContext} from "../context/ModalContext";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import {CreateOrg} from "./CreateOrg";
import {CreateNewOrg} from "./CreateNewOrg";



const example: IOrg ={
    orgId:99,
    orgName:"test",
    orgAnnot:"test",
    orgContacts:"test"
}



export function OrgComponent(){
    const [orgs, setOrgs] = useState<IOrg[]>([]);
    const [details, setDetails] = useState(false)
    const btnBgClassName = details? 'bg-grey': 'bg-white';
    const btnClasses = ['py-2 px-4 border-2', btnBgClassName]
    const {modal, open, close} = useContext(ModalContext)
    const {isOpen, toggle} = useModal()


    useEffect(()=>{
        OrgService.getOrgs().then((response)=>{
           setOrgs(response.data);
        });
    },[]);


    function refreshPage(){
        window.location.reload();
    }


    function addOrg(org:IOrg){
        setOrgs(prev =>[...prev, org])
    }


    const createHandler = (org: IOrg)=>{
        close()
        addOrg(org)
        refreshPage()
    }


    return(
        <div>
            <h3 className="text-lg-start">Organizations</h3>
            <table className="table table-striped">
                <thead>
                <tr>
                    <td>Org Id</td>
                    <td>Org Name</td>
                    <td>Org Annotation</td>
                    <td>Org Contacts</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {orgs.map(org => (
                    <tr key={org.orgId}>
                        <td>{org.orgId}</td>
                        <td>{org.orgName}</td>
                        <td>{org.orgAnnot}</td>
                        <td>{org.orgContacts}</td>
                        <td>
                            <button className={btnClasses.join(' ')} style={{margin: "2px"}}
                                    onClick={() => {
                                        setDetails(prev => !prev);
                                        OrgService.editOrg(org.orgId)
                                        refreshPage()
                                    }}
                            >edit
                            </button>
                            <button className={btnClasses.join(' ')} style={{margin: "2px"}}
                                    onClick={() => {
                                        setDetails(prev => !prev);
                                        OrgService.deleteOrg(org.orgId)
                                        refreshPage()
                                    }}
                            >delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {/*{modal && <Modal title="Aboba" onClose={close}><CreateOrg onCreate={createHandler}></CreateOrg></Modal>}*/}
            {/*   <Modal/>*/}
            {/*<button className="px-10 py-20" onClick={open}>Create new </button>*/}
            <button onClick={toggle}> Create new</button>
            <Modal isOpen={isOpen} toggle={toggle}>
                <CreateNewOrg onCreate={createHandler}/>
            </Modal>
            {/*<button className="px-10 py-20" onClick={()=>{OrgService.createOrg(example)*/}
            {/*                                                                refreshPage()}}>Create new</button>*/}
        </div>
    )
}