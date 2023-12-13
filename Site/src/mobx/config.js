import {action, makeObservable, observable} from "mobx";

class Config {
    email = ''
    AccountID = ''
    GlobalAPIKey = ''

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
