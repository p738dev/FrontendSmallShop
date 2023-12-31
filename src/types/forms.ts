import { Roles } from "./role";

export interface FormRegisterValues {
  name: string;
  email: string;
  password: string;
  role_id: string;
  role?: Roles;
}

export interface FormLoginValues {
  email: string;
  password: string;
}
