import { createContext } from "react";

const AuthTokenContext = createContext({
  acces_token: "",
});

export default AuthTokenContext;
