export enum searchQueryTypes {
  EmailOrName = "emailOrName",
  Page = "page",
  Limit = "limit",
  LeadId = "leadId",
  Birthday = "birthday",
  StartingDate = "startingDate",
  TimeOffRemainingDays = "timeOffRemainingDays",
}

export default {
  users: {
    postUser: (leadId?: string) => `/users/${leadId ? leadId : ""}`,
    searchUsers: (
      searchBy: searchQueryTypes,
      searchTerm: string,
      page = 1,
      limit = 10
    ) => `/users/search?${searchBy}=${searchTerm}&page=${page}&limit=${limit}`,
    getUsers: "/users",
    getUser: (userId: string) => {
      `/users/${userId}`;
    },
    updateUser: (userId: string, leadId?: string) => {
      `/users/${userId}/${leadId ? leadId : ""}`;
    },
    deleteUser: (userId: string) => {
      `/users/${userId}`;
    },
  },
  leads: {
    postLead: (userId: string) => `/leads/${userId}`,
    getLeads: "/leads",
    getLead: (leadId: string) => `/leads/${leadId}`,
    deleteLead: (leadId: string) => `/leads/${leadId}`,
  },
  timeOffs: {
    postTimeOff: (userId: string) => `/timeoffs/${userId}`,
    getTimeOffs: "/timeoffs",
    getTimeOff: (id: string) => `/timeoffs/${id}`,
    updateTimeOff: (id: string) => `/timeoffs/${id}`,
    deleteTimeOff: (id: string) => `/timeoffs/${id}`,
  },
  celebrations: {
    postCelebration: (userId: string) => `/celebrations/${userId}`,
    getCelebrations: "/celebrations",
    getCelebration: (id: string) => `/celebrations/${id}`,
    updateCelebration: (id: string) => `/celebrations/${id}`,
    deleteCelebration: (id: string) => `/celebrations/${id}`,
  },
  sessions: {
    postSession: "/sessions",
    getSessions: "/sessions",
    deleteSessions: "/sessions",
  },
};
