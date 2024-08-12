// ham gui yeu cau toi api
export const request= async (page)=>{
    // dung promise de xu ly async/await 
    return await new Promise((resolve, reject)=>{
        // gui yeu cau toi api tra ve name login picture
        fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=abc&inc=name,login,picture`).then(response=>{
            // kiem tra trang thai
            if(!response.ok){
                reject(new Error(`HTTP error! status: ${response.status}`))
            }
            // chuyen doi du lieu tu json sang js
            response.json().then(data=>{
                resolve(data.results);
            })
        })
    }).then(data=>data);
}