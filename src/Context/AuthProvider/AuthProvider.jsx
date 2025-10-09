import React from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    
  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    loginWithGoogle,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
