import Axios from "axios";
import { get } from "lodash";
import { useAppSelector, RootState } from "../redux/store";
import { userActions } from "../redux/reducer/user";

export const useApiClient = () => {
  const accessToken = useAppSelector(
    (state: RootState) => state.user.user?.accessToken
  );
  const refreshToken = useAppSelector(
    (state: RootState) => state.user.user?.refreshToken
  );
  const { setAccessToken } = userActions();

  // TODO define baseUrl in env.development and take it from there
  const apiClient = Axios.create({
    baseURL: "https://genericsoft-api.herokuapp.com",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `Bearer ${refreshToken}`,
    },
  });

  apiClient.interceptors.response.use(
    function (successRes) {
      const newAcessToken = get(successRes.headers, "x-access-token", "");
      if (newAcessToken) {
        setAccessToken(newAcessToken);
      }
      return successRes;
    },
    function (error) {
      return error;
    }
  );
  return apiClient;
};
