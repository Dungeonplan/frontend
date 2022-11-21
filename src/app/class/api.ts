import { HttpHeaders } from "@angular/common/http";
import { isDevMode } from "@angular/core";

export class Api {
    static devBaseURL: string = 'http://localhost:8123/api/'
    static prodBaseURL: string = 'https://test.dungeonplan.de/api/'

    static tokenexchange: string = 'tokenexchange'
    static logindiscord: string = 'logindiscord'
    static logout: string = 'logout'
    
    static roles: string = 'roles'
    static actions: string = 'actions'

    public static httpOptionsJSONWithBearer(token: string) {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(token)
            })
        }
    }

    public static getBaseURL(): string {
        if (isDevMode()) {
            return Api.devBaseURL
        } else {
            return Api.prodBaseURL
        }
    }

    public static getTokenexchangeURL(): string {
        return this.getBaseURL() +  Api.tokenexchange
    }

    public static getDiscordLoginURL(): string {
        return this.getBaseURL() + Api.logindiscord
    }

    public static getLogoutURL(): string {
        return this.getBaseURL() + Api.logout
    }

    public static getRolesURL(): string {
        return this.getBaseURL() + Api.roles
    }

    public static getActionsURL(): string {
        return this.getBaseURL() + Api.actions
    }
}
