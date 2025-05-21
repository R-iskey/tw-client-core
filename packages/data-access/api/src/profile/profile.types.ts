export interface ProfileBalanceResponse {
  balance: string;
  limit: string;
  rate: number;
}

export interface CurrentUser {
  active: number;
  address?: string;
  avatar?: string;
  balance: string;
  betLimit: string;
  bettingAllowed: number;
  birthday: Date;
  city?: string;
  country: string;
  created: Date;
  currency: string;
  deleted: number;
  deletedAt: Date;
  eMail: string;
  fName: string;
  gender: string;
  hasError: boolean;
  id: number;
  kind: string;
  lName: string;
  liveDelay: number;
  locale: string;
  message?: string;
  meta: string;
  monitored: number;
  phone: string;
  timezone?: string;
  username: string;
};
