import { QueryClient } from "react-query";
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 25000 } },
});
export default queryClient;
