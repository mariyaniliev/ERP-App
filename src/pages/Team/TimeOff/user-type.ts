export interface User {
  id: string;
  name: string;
  email: string;
  enabled: boolean;
  authority: string;
  alcohol: string;
  tshirtSize: string;
  createdAt: string;
  updatedAt: string;
  leadId: string;
  celebration: [];
  timeOffRemainingDays: number;
}
