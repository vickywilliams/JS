const user = {
    name : 'Vicky Williams',
    username : 'Vicky',
    password : 'password:)',

    login: function(username, password){
        if(this.username == username && this.password){
            console.log('login success')
        }
        else{
            console.log('authentication failed')
        }
    }
}
user.login('Vicky','password');
user.login('williams','password');