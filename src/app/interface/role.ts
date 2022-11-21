import { Action } from "./action";

export interface Role {
    id: number;
    short_name: string;
    description: string;
    hierarchy: number;
    system: boolean;
    actions?: Action[];
}
