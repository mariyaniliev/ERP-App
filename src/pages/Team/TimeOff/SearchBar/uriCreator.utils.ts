export const urlCreator = (
  period: string,
  type: string,
  approved: string | JSX.Element,
  searchedName: string,
  page: number,
  limit: number
) => {
  const periodPredicate = period === "Period" ? "" : period.toLowerCase();
  const typePredicate = type === "Type" ? "" : type.split(" ")[0].toLowerCase();
  let approvedPredicate: string;
  if (typeof approved === "object") {
    if (approved.props.children === "✖") {
      approvedPredicate = "false";
    } else {
      approvedPredicate = "true";
    }
  } else {
    approvedPredicate = "";
  }
  let url = `timeoffs/search?page=${page}&limit=${limit}&emailOrName=${searchedName}`;
  if (approvedPredicate !== "") {
    url = url.concat(`&approved=${approvedPredicate}`);
  }
  if (typePredicate !== "") {
    url = url.concat(`&type=${typePredicate}`);
  }
  if (periodPredicate !== "") {
    url = url.concat(`&period=${periodPredicate}`);
  }

  return url;
};
