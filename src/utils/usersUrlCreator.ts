export const usersUrlCreator = (
  searchUsersQuery: string,
  timeOffs: number,
  birthday: string,
  pagination: string,
  rows: string
) => {
  let url = `/users?page=${pagination}&limit=${rows}`;
  if (searchUsersQuery !== "") {
    url = `/users/search?emailOrName=${searchUsersQuery}&page=${pagination}&limit=${rows}`;
  }
  if (timeOffs > 0) {
    url = `/users/search?timeOffRemainingDays=${timeOffs}&page=${pagination}&limit=${rows}`;
  }
  if (birthday !== "") {
    url = `/users/search?birthday=${birthday}&page=${pagination}&limit=${rows}`;
  }
  return url;
};
