class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}`
    }
    set password(value){
        this._password=value
    }
}
const wasim=new user("wasim@gmail.com",123)
console.log(wasim)