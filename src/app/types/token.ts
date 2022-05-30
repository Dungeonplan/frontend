import { UserAction } from './userAction';
import { Role } from './role';

export interface Token {
  token: string;
  user_actions: UserAction[];
  roles: Role[];
}
