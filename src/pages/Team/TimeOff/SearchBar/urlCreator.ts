export const urlCreator = (
  status: string,
  page: number,
  limit: number,
  period: string,
  type: string,
  searchedName: string
) => {
  const periodPredicate = period === "Period" ? "" : period.toLowerCase();
  const approvedPredicate = status === "approved" ? "true" : "false";
  const typePredicate = type === "Type" ? "" : type.split(" ")[0].toLowerCase();
  const pagePredicate = status !== "approved" ? 1 : page;
  const url = `/timeoffs/search?page=${pagePredicate}&limit=${limit}&emailOrName=${searchedName}&type=${typePredicate}&approved=${approvedPredicate}&period=${periodPredicate}`;
  return url;
};
