// ham sap xep lai du lieu theo fullnames va usernames
// muc do uu tiem fullnames > usernames
// neu fullnames giong nhau moi so sanh toi usernames
export const sort=(fullnames,usenames,data)=>{
    // neu fullnames va usernames khong co thi tra ve du lieu ban dau
    if(!fullnames && !usenames){
        return data;
    }
    // neu khong co du lieu fullnames thi loc theo usernames
    if(!fullnames){
        const sortData=[...data].sort((a,b)=>usenames==='az'?a.getInformation().userName.localeCompare(b.getInformation().userName):b.getInformation().userName.localeCompare(a.getInformation().userName));
        // console.log(sortData);
        return sortData;
    }

    return [...data].sort((a,b)=>{
        // kiem tra xem fullname co giong nhau khong
        const fullnameCompare = fullnames==='az'? a.getInformation().fullName.localeCompare(b.getInformation().fullName):b.getInformation().fullName.localeCompare(a.getInformation().fullName);
        // neu giong nhau thi tra ve ket qua so sanh
        if(fullnameCompare!==0){
            return fullnameCompare;
        }
        // neu khac kiem tra xem co loc theo usename hay khong
        // neu co tiep tuc kiem tra theo usename
        if(usenames){
            return usenames==='az'?a.getInformation().userName.localeCompare(b.getInformation().userName):b.userName.localeCompare(a.getInformation().userName);
        }
    })

}