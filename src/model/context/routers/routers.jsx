import { createBrowserRouter, RouterProvider, useLocation} from "react-router-dom";
import { createContext, useContext} from "react";
import { paths } from "./paths/paths";
// khai bao context
const RouterContext=createContext();
// khai bao component 
export const RouterService=()=>{
    const routers=createBrowserRouter(paths);
    return (
        <RouterContext.Provider value={{}}> 
            <RouterProvider router={routers} />
        </RouterContext.Provider>
    );
    // 
};
export const useRouter=()=>useContext(RouterContext);