export interface UserTypeDB {
  name: string;
  email: string;
  dateJoined: string;
  phoneNumber: string;
  totalCookiesPurchased: number;
  totalRewardsEarned: number;
  totalPointsEarned: number;
}

export interface UserTypeClient extends UserTypeDB { 
  uuid: string;
}

export interface NewsCardTypeDB {
  title: string;
  date: string;
  src: string;
  thumbnail: string;
}