import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
import useAxios from "../../Hooks/useAxios";
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("null");
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginEmailWithPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser?.email) {
        const userData = { email: currentUser.email };
        axiosInstance
          .post("api/v1/users/jwt", userData)
          .then((res) => {
            const token = res.data.token;
            // console.log(token);
            localStorage.setItem("token", token);
          })
          .catch(() => {});
      }
      // console.log("OnSate user Info", currentUser);
    });
    return () => unSubscribe();
  }, [axiosInstance]);

  const userProfileUpdate = (data) => {
    return updateProfile(auth.currentUser, data);
  };

  const authInfo = {
    user,
    loading,
    logOutUser,
    loginWithGoogle,
    createAccount,
    userProfileUpdate,
    loginEmailWithPass,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
