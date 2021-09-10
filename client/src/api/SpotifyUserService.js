import BackEndCall from "./BackEndCall";
import * as tokenService from "../utils/tokenService";

// const create = (data) => {
//   return BackEndCall.post("/register", data);
// };

const login = (data) => {
  let token = tokenService.getToken();
  return BackEndCall.post("/spotify", data, token);
};

const getUser = () => {
  let user = tokenService.getUserFromToken();
  console.log("DECODED USER FROM GET USER FUNCTION IN USER SERVICE: ", user);
  return user;
};

export { login, getUser };
