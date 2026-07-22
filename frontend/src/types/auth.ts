export type LoginRequest = {
    email: string;
    password: string;
  };
  
  export type SignupRequest = {
    name: string;
    email: string;
    password: string;
  };
  
  export type User = {
    id: string;
    name: string;
    email: string;
  };
  
  export type AuthResponse = {
    user: User;
    accessToken?: string;
  };