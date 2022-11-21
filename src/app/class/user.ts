import { isDevMode } from "@angular/core";
import { ActionEnum } from "../enum/action-enum";
import { Role } from "../interface/role";

export class User {
    public isLoggedIn: boolean;

    constructor(public id: number, public username: string, public email: string, public locale: string, public token: string, public role?: Role,) {
        this.isLoggedIn = (this.id != -1 && this.username !== '' && this.token !== '' && this.email !== '')
    }

    hasPermission(actionEnum: ActionEnum): boolean {
        if (this.role == null || this.role.actions == null) {
            return false
        } else {
            let granted = this.role.actions.filter(action => action.id == actionEnum.valueOf()).length == 1
            if (isDevMode()) {
                if (granted) {
                    console.log("Checking for Permission " + ActionEnum[actionEnum] + ": granted")
                } else {
                    console.log("Checking for Permission " + ActionEnum[actionEnum] + ": refused")
                }
            }
            return granted
        }
    }

    canViewAdminPanel(): boolean {
        return (this.hasPermission(ActionEnum.ROLE_ADD)
            || this.hasPermission(ActionEnum.ROLE_DELETE)
            || this.hasPermission(ActionEnum.ROLE_MODIFY))
    }
}
