import React from "react"
import Div from "../div/div"
import Page from "./page/page"
import {useParams } from "react-router-dom";
import { setUp } from "./setup/setup";

const Pages=()=>{
    const {page} = useParams();
    const pages= setUp(page);
    return <Div margin="30px 0" justify="center" align="center">
        {pages}
    </Div>
}
// 
export default React.memo(Pages);