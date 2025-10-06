interface UserProfile {
  id: number;
  username: string;
  isAdmin?: boolean;
}

const profile: UserProfile = { id: 101, username: "phatvan" };
