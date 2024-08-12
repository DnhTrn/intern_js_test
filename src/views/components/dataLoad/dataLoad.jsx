import React from "react";
import Div from "../div/div";
import { light } from "../../../assets/theme/light";

const DataLoad=()=>{
    const load=[];
    for(let i=0;i<10;i++){
        load.push(
        <tr key={i} style={{height:'30px'}} >
            <td style={{width:'30%'}}><Div radius="25px" padding="5px 10px" height="40px" background={light.background.load} /></td>
            <td style={{width:'25%'}}><Div radius="25px" padding="5px 10px" height="40px" background={light.background.load} /></td>
            <td style={{width:'20%'}}><Div radius="15px" padding="5px 10px" width="40px" height="40px" background={light.background.load} /></td>
        </tr>);
    }
    return (
        <>
            {load}
        </>
        
    )
};

export default React.memo(DataLoad);