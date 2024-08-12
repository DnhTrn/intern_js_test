import React from "react";
import Div from "../../div/div"
import { light } from "../../../../assets/theme/light";
import { Link } from "react-router-dom";

const Page=({page,isSelected})=>{
    return (
        <Link style={{width:"100%",textDecoration: 'none'}} to={`/users-management/${page}`}>
            <Div radius="10px" justify="center" cursor="pointer"  align="center" margin="0 5px"
            color={isSelected?light.text.page.selected:light.text.main} hover={`background:${light.background.hover.main};color:${light.text.hover.main}`}
            background={isSelected?light.background.buttom.page.selected:light.background.buttom.main} 
            width="30px" height="30px">{page}</Div>
        </Link>
        
    )
}
// 
export default React.memo(Page);