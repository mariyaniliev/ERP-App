export const urlCreator = (
  page: number,
  limit: number,
  period: string,
  type: string,
  approved: string,
  searchedName: string
) => {
  const periodPredicate = period === "Period" ? "" : period.toLowerCase();
  const approvedPredicate =
    approved === "Approved" ? "" : approved.toLowerCase();
  const typePredicate = type === "Type" ? "" : type.split(" ")[0].toLowerCase();
  const url = `/timeoffs/search?page=${page}&limit=${limit}&emailOrName=${searchedName}&type=${typePredicate}&approved=${approvedPredicate}&period=${periodPredicate}`;
  return url;
};
