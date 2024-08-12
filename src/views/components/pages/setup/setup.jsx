import { Link } from "react-router-dom";
import Div from "../../div/div";
import Page from "../page/page";
import { light } from "../../../../assets/theme/light";
// ham setup cac page 
export const setUp=(current)=>{
    // bat dau voi key =0
    let key=0;
    const pages= []
    let check=false;
    // neu trang hien tai lon hon 1 them nut back o dau
    if(current>1){
        pages.push(<Link key={key} style={{width:"100%",textDecoration: 'none'}} to={`/users-management/${parseInt(current)-1}`} >
            <Div hover={`background:${light.background.hover.main};color:${light.text.page.selected}`} 
             radius="10px" justify="center" cursor="pointer"  align="center" width="30px" height="30px"  >{'<'}</Div></Link>);
        key++;
    }
    // them cac so trang 
    for(let i=1;i<=10;i++){
        // trang dau tien va cuoi cung luon duoc them
        if(i==1||i==10){
            pages.push(<Page isSelected={i==current} key={key} page={i}/>);
            key++;
            continue;
        }
        // them cac trang truoc va sau cua trang hien tai
        if(current-i<2&&i-current<2){
            check=false;
            pages.push(<Page isSelected={i==current} key={key} page={i}/>);
            key++;
            continue;
        }
        // neu !check se tien hanh them phan ... o giua cac trang
        if(!check){
            check=true;
            pages.push(<Div radius="10px" justify="center" cursor="pointer"  align="center" width="30px" height="30px" key={key} >{'...'}</Div>);
            key++;
        }
        
    }
    // neu trang hien tai nho hon 10, them nut next vao cuoi
    if(current<10){
        pages.push(<Link key={key} style={{width:"100%",textDecoration: 'none'}} to={`/users-management/${parseInt(current)+1}`} >
            <Div hover={`background:${light.background.hover.main};color:${light.text.page.selected}`}
             radius="10px" justify="center" cursor="pointer"  align="center" width="30px" height="30px"  >{'>'}</Div></Link>);
    }
    return pages;
};