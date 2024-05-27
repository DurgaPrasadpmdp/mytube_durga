import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthTokenContext from "../Utils/Context/AuthTokenContext";

const Login = () => {
  const { setToken } = useContext(AuthTokenContext);
  const navigate = useNavigate();
  function checkEnvironment() {
    let loginBaseUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    //'https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost/oauth2callback&response_type=token&client_id=client_id'
    // if(window.location.host.includes('localhost')){
    //     redirectUrl = window.location.href
    // }else{

    // }
    const cookies = document.cookie.split("; ");
    const transformedCookie = cookies.map((item) => {
      return { [item.split("=")[0]]: item.split("=")[1] };
    });
    const authCookie = transformedCookie.filter((cook) => cook.authCookie);
    if (authCookie.length > 0) {
      navigate("/");
    } else {
      const url = new URLSearchParams(window.location.href);
      const access_token = url.get("access_token");
      const expires = url.get("expires_in");
      if (access_token) {
        document.cookie = `authCookie=${access_token}; ` + expires + "; path=/";
        setToken(access_token);
        navigate("/");
      } else {
        redirectTOAuth();
      }
    }

    function redirectTOAuth() {
      const authUrl = new URL(loginBaseUrl);

      const params = {
        client_id:
          "618418161950-diorgljr65lt2g1f2pkcoh8if5m0ol2u.apps.googleusercontent.com",
        response_type: "token",
        redirect_uri: "http://localhost:3000/login",
        scope:
          "https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
        include_granted_scopes: "true",
        state: "pass-through value",
      };
      const searchParams = new URLSearchParams(params).toString();
      authUrl.search = searchParams;

      window.location.href = authUrl;
    }
  }
  checkEnvironment();
  //http://localhost:3000/#state=pass-through%20value&access_token=ya29.a0AXooCgvvG4Ce23ZcNMekYFHHbFjMiF8mtrCLVkTJKmFPVVefFRgFF6liHBjXWYZ8Kx-zvzYbf9bR2xOQoVfWTbJy87fIoMZXG-RgYFugMDyTGtAfaEyMxtm53WF-MnPqoXTJpf6n4H8sh-6Iz1a65eIe_YUsn_DR-waCgYKAasSARASFQHGX2MiV4U-Dz8fV4M0JtvmHmXb8w0169&token_type=Bearer&expires_in=3599&scope=https://www.googleapis.com/auth/youtube.force-ssl
  return <div> Login</div>;
};

export default Login;
