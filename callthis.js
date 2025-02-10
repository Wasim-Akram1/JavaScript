function serUserName(username){
    this.username=username
    console.log("callled")
}

function createUser(username, email, password){
    serUserName.call(this, username)
    this.email=email
    this.password=password
}

const chai=new createUser("Wasim", "Wasim@fb.com", "123")
console.log("Wasim")