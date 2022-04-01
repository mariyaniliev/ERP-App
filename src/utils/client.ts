import axios from "axios";
import { useAppSelector, RootState } from "../redux/store";
import { userActions } from "../redux/reducer/user";
import { get } from "lodash";
const accessToken = useAppSelector(
  (state: RootState) => state.user.user.accessToken
);
const refreshToken = useAppSelector(
  (state: RootState) => state.user.user.refreshToken
);
const actions = userActions();

const axiosInstance = axios.create({
  baseURL: "https://localhost:4000",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "x-refresh": `Bearer ${refreshToken}`,
  },
});

axios.interceptors.response.use(
  function (successRes) {
    const newAcessToken = get(successRes, "x-access-token", "");
    if (newAcessToken) {
      actions.setAccessToken(newAcessToken);
    }
  },
  function (error) {
    console.log(error);
  }
);
