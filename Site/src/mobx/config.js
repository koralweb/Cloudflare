import {action, makeObservable, observable} from "mobx";

class Config {
    email = 'niceguy4charm@gmail.com'
    AccountID = 'e134c24ec11cc227dbb3ffbf534e1db7'
    GlobalAPIKey = 'b0acb5a7e829712e0f5228507e0ce515a6f21'

    constructor(user, access, setUser, setAccess) {
        makeObservable(this, {
            email: observable,
            GlobalAPIKey: observable,
            AccountID: observable,
            setEmail: action,
            setAccountID: action,
            setGlobalAPIKey: action,
        });
    }

    setEmail(email) {
        this.email = email
    }

    setAccountID(AccountID) {
        this.AccountID = AccountID
    }

    setGlobalAPIKey(GlobalAPIKey) {
        this.GlobalAPIKey = GlobalAPIKey
    }
}

const config = new Config();

export default config;
