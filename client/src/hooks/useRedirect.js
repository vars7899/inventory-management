import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RESET, userLoginStatus } from "../redux/feature/authSlice";

export const useRedirectLoggedOut = (path, to) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    async function check() {
      await dispatch(userLoginStatus());
      if (!isLoggedIn) {
        // toast.info("Session expired, Please Sign in to continue");
        return navigate(path);
      }
      await dispatch(RESET());
      navigate(to);
    }
    check();
  }, [navigate, dispatch, path, isLoggedIn]);
};
