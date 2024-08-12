import React, { useState } from "react";
import Div from "./components/div/div";
import Table from "./components/table/table";
import Filter from "./components/filter/filter";

const UserInformation=()=>{
    // trang thai loc du lieu theo fullnames
    const [sortFullNames,setSortFullNames]=useState();
    // trang thai loc du lieu theo usernames
    const [sortUserNames,setSortUserNames]=useState();
    return (
        <Div column={true} justify="center" align="center" width="80%" >
            <Filter sortFullNames={sortFullNames} sortUserNames={sortUserNames} setSortFullNames={setSortFullNames} setSortUserNames={setSortUserNames} />
            <Table sortFullNames={sortFullNames} sortUserNames={sortUserNames} />
        </Div>
    )
};

export default React.memo(UserInformation);