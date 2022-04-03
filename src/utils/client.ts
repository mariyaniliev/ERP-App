import Axios from "axios";
import { useAppSelector, RootState } from "../redux/store";
import { userActions } from "../redux/reducer/user";
import { get } from "lodash";
export const useApiClient = () => {
  const accessToken = useAppSelector(
    (state: RootState) => state.user.user?.accessToken
  );
  const refreshToken = useAppSelector(
    (state: RootState) => state.user.user?.refreshToken
  );
  const actions = userActions();

  const apiClient = Axios.create({
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "x-refresh": `Bearer ${refreshToken}`,
    },
  });

  apiClient.interceptors.response.use(
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

  return apiClient;
};
