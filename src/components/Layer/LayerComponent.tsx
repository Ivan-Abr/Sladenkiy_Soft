import React, {useEffect, useState} from "react";
import {ILayer} from "../../models";
import LayerService from "../../services/LayerService";

export function LayerComponent(){
    const [layers, setLayers] = useState<ILayer[]>([])


    useEffect(()=>{
        LayerService.getLayers().then((response)=>{
            setLayers(response.data);
        });
    },[]);


    function refreshPage(){
        window.location.reload();
    }

    return(
        <div>
            <h3 className="text-lg-start">Layers</h3>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <td>Layer Id</td>
                    <td>Layer Name</td>
                    <td>Question Ids</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {layers.map(layer => (
                    <tr key={layer.layerId}>
                        <td>{layer.layerId}</td>
                        <td>{layer.layerName}</td>
                        <td>{layer.questionIds}</td>
                        <td>
                            <button>edit</button>
                            <button>delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {/*<button onClick={() =>  }> Create new</button>*/}
        </div>
    )
}