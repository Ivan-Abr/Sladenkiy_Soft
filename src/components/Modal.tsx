import React, { ReactNode } from "react";


interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function Modal(props: ModalType) {
    return (
        <>
            {props.isOpen && (
                <div className="modal-overlay">
                    <div  className="modal-box">
                        <button className="align-top align-content-lg-start" onClick={props.toggle}>Close</button>
                        {props.children}
                    </div>
                </div>
            )}
        </>
    );
}
