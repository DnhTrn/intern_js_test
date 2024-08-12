import { request } from "../../../model/API/request";
import UserModel from "../../../model/userModel/userModel";
import { sort } from "../../sort/sort";
// ham lay du lieu
export const getData = async ({page,setData,setIsLoad,setError,sortFullNames,sortUserNames}) => {
    try {
      // goi ham gui yeu cau toi api
      const data = await request(page);
      if (!data) {
        setError('Failed to get data');
        setIsLoad(false);
        return;
      }
      // tao mang user tu du lieu tra ve tu api
      const users = data.map(user => {
        return new UserModel({
          title: user.name.title,
          first: user.name.first,
          last: user.name.last,
          username: user.login.username,
          thumbnail: user.picture.thumbnail
        });
      });
      // sap xep lai du lieu sau do luu vao data
      setData(sort(sortFullNames,sortUserNames,users));
      // ket thuc load du lieu
      setIsLoad(false);
    } catch (error) {
      setError('Error fetching data');
      setIsLoad(false);
    }
  };