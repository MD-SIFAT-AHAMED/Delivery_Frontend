import React from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginEmailWithPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userProfileUpdate = (data) => {
    return updateProfile(auth.currentUser, data);
  };

  const authInfo = {
    loginWithGoogle,
    createAccount,
    userProfileUpdate,
    loginEmailWithPass,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
