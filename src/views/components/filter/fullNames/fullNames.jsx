import React from "react";
import Div from "../../div/div";
import { light } from "../../../../assets/theme/light";
// component chon option sap xem theo fullnames
const FullNames =({set,value})=>{
    return (
        <Div width="90%" height="40px" column={true} justify="start" align="baseline">
            <h3  style={{margin:'0'}}>Fullnames</h3>
            <Div width="100%" height="40px" justify="start" align="baseline">
                <h5 style={{margin:'0 20px 0 10px'}}>Sort by</h5>
                <Div background={value==='az'?light.background.buttom.seccon:light.background.buttom.main}
                    color={value==='az'?light.text.seccon:light.text.main}
                    border={value!=='az'?`1px solid ${light.border.main}`:'none'} hover={`background:${light.background.hover.main};color:${light.text.hover.main}`} 
                padding="5px 15px" radius="10px" cursor="pointer" margin="5px 20px" onClick={()=>set('az')} >A to Z</Div>
                <Div background={value==='za'?light.background.buttom.seccon:light.background.buttom.main}
                    color={value==='za'?light.text.seccon:light.text.main}
                    border={value!=='za'?`1px solid ${light.border.main}`:'none'} hover={`background:${light.background.hover.main};color:${light.text.hover.main}`}
                padding="5px 15px" radius="10px" cursor="pointer" margin="5px 20px" onClick={()=>set('za')} >Z to A</Div>
            </Div>
        </Div>
    );
};
// 
export default React.memo(FullNames);