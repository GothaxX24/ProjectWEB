class UserLog {

    static instance;
    id = '';
    token = '';

    constructor( id = '', token = '' ) {

        if (typeof UserLog.instance == 'object'){
            return UserLog.instance;
        }

        UserLog.instance = this;
        this.id = id;
        this.token = token;
        
        return this;
    }
}