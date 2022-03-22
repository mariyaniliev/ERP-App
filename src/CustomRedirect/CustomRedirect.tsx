import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// Redux
import { RootState, useAppSelector } from "../redux/store";

/** Redirect to pre-selected page */
const CustomRedirect = () => {
  /** Object which contains parameters to next page {pathname: ... , state: ...} */
  const { redirect } = useAppSelector((state: RootState) => state.redirect);

  const [redirectPath, setRedirectPath] = useState(redirect);

  useEffect(() => {
    window.onpopstate = () => {
      /** Detect browser back button and reset redirectPath */
      return setRedirectPath("");
    };
    /** Update redirectPath when the state from redux appear */
    setRedirectPath(redirect);
  }, [redirect]);

  return redirectPath ? <Navigate to={redirectPath} replace /> : null;
};

export default CustomRedirect;
