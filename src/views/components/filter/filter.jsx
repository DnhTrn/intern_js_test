import React, { useState } from "react";
import { light } from "../../../assets/theme/light";
import Div from "../div/div";
import FullNames from "./fullNames/fullNames";
import UserNames from "./userName/userNames";

const Filter=({sortFullNames,sortUserNames,setSortFullNames,setSortUserNames})=>{
    // an hien phan loc du lieu
    const [isShow,setIsShow]=useState(false);
    return (
        <>
            <Div width="70%"  justify="space-between" align="baseline">
                <h1>Users management</h1>
                <Div padding="8px 25px" radius='15px' border={!isShow ? `1px solid ${light.border.main}`:'none'}
                background={isShow?light.background.buttom.page.selected:light.background.buttom.main} cursor="pointer"
                color={isShow?light.text.page.selected:light.text.main} onClick={()=>setIsShow(!isShow)} hover={`background:${light.background.hover.main};color:${light.text.hover.main}`}
                >Filter</Div>
            </Div>
            {!!isShow&& <Div position="relative"  width="66%" padding="10px 2%" border={`1px solid ${light.border.main}`} radius="15px"  height="100px" justify="center" align="baseline">
                    <FullNames value={sortFullNames} set={setSortFullNames}/>
                    <UserNames value={sortUserNames} set={setSortUserNames}/>
                    <Div position="absolute" bottom="5px" right="15px" cursor="pointer" hover={`color:${light.text.hover.seccon}`} 
                        onClick={()=>{
                            setSortFullNames();
                            setSortUserNames();
                        }}
                    >Reload</Div>
                </Div>}                          
        </>
        
    );
}
export default React.memo(Filter);