// opject luu thong tin nguoi dung
export default class UserModel{
    title;
    first;
    last;
    userName;
    thumbnail;
    // 
    constructor(data){
        this.title = data.title;
        this.first = data.first;
        this.last = data.last;
        this.userName = data.username;
        this.thumbnail = data.thumbnail;
    }
    // lay thong tin nguoi dung
    getInformation=()=>{
        return {
            fullName:`${this.title} ${this.first} ${this.last}`,
            userName:this.userName,
            thumbnail:this.thumbnail,
        }
    }
}