import { useEffect, useState } from "react";
import { sort } from "../sort/sort";
import { getData } from "./getData/getData";

export const useGetData = (page, sortFullNames,sortUserNames) => {
  // luu du lieu duoc goi ve
  const [data, setData] = useState(null);
  // tinh trang loading, error
  const [isLoad, setIsLoad] = useState(true);
  const [error, setError] = useState(null);
  // tham so cho ham lay du lieu
  const option={
    page,setData,setIsLoad,setError,sortFullNames,sortUserNames
  }
  // goi ham lay du lieu moi khi page thay doi
  useEffect(() => {
    setIsLoad(true);
    let timeout;
    timeout=setTimeout(()=>{
      // goi ham lay du lieu moi khi page thay doi
      getData(option)
    },1000);
    return ()=>{
      clearTimeout(timeout);
    }
  }, [page]);
  // sap xep du lieu theo muc da chon
  useEffect(()=>{
    setIsLoad(true);
    let timeout;
    timeout = setTimeout(()=>{
      // neu khong co muc sap xep nao duoc chon thi lay du lieu tu API
      if(!sortFullNames && !sortUserNames){
        getData(option);
      }else{
        setData(sort(sortFullNames,sortUserNames,data));
        setIsLoad(false);
      }
      
    }, 500);
    return ()=>{
      clearTimeout(timeout);
    }
  },[sortFullNames,sortUserNames])

  return { data, isLoad, error };
};
