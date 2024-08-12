import App from "../../../../App";
import UserInfomation from "../../../../views/userInfomation";
import { Navigate } from "react-router-dom";

export const paths=[
    {
        path:'/',
        element:<App/>,
        children:[
            {
                // mac ding khi load se dua ve trang dau tien
                index:true,
                element:<Navigate to="/users-management/1"/>
            },{
                 // ding nghia route voi tham so page dong
                path:'/users-management/:page',
                element:<UserInfomation/>
            }
        ]
    },
    {
        path:'*',
        element:<h1>404</h1>
    }
]