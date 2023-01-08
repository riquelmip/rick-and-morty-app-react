import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();
  return useEffect(() => {
    (async function () {
      logout();
    })();
  });
};

export default Logout;
