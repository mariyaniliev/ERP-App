import { QueryClient } from "react-query";
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 25000, keepPreviousData: true } },
});
export default queryClient;
