import React from "react";
import styled from "styled-components";
import { useGetData } from "../../../viewModel/API/useGetData";
import { useParams } from "react-router-dom";
import DataLoad from "../dataLoad/dataLoad";
import { light } from "../../../assets/theme/light";

const Table=({sortFullNames,sortUserNames})=>{
    // lay page hien tai dang duoc truy cap bang useParams
    const {page}=useParams();
    // lay du lieu tu API
    const {data,isLoad}=useGetData(page,sortFullNames,sortUserNames);
    return (
        <TableStyle>
            <HeadStyle>
                <tr>
                    <th>Full Name</th>
                    <th>Username</th>
                    <th>Thumbnail</th>
                </tr>
            </HeadStyle>
            <tbody> 
             {!!isLoad&&<DataLoad/>}
             {!!!isLoad&& data&& data.map((user,index)=>{
                const infor=user.getInformation();
                return <TableRow key={index}>
                    <td style={{width:'30%'}}>{infor.fullName}</td>
                    <td style={{width:'25%'}}>{infor.userName}</td>
                    <td style={{width:'20%'}}>
                      <img style={{borderRadius:"15px"}} src={infor.thumbnail} alt="User thumbnail" />
                    </td>
                </TableRow>
             })}
            </tbody>
        </TableStyle>
    );
};
// 
const TableStyle=styled.table`
    border-collapse: separate;
    border: 2px solid;
    width:70%;
    height: 400px;
    margin: 10px;
    border-radius: 10px;
    border-bottom: 1px solid #ddd;
`;
// 
const HeadStyle=styled.thead`
    padding: 20px 10px;
    border-bottom: 1px solid #ddd;
    border-collapse: separate;
    text-align: left;
`;
// 
const TableRow = styled.tr`
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    &:hover {
        background: ${light.background.hover.main};
        color: ${light.text.hover.main};
    }
`;
// 
export default React.memo(Table);