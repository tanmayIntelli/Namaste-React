import { useEffect, useState } from "react";
const useOnline = () => {
  const [userStatus, setUserStatus] = useState(true);
  const userIsOnline = () => {
    setUserStatus(true);
  };
  const userIsOffline = () => {
    setUserStatus(false);
  };
  useEffect(() => {
    window.addEventListener("online", userIsOnline);
    window.addEventListener("offline", userIsOffline);

    return () => {
      window.removeEventListener("online", userIsOnline);
      window.removeEventListener("offline", userIsOffline);
    };
  }, []);

  return userStatus;
};

export default useOnline;
