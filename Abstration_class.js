class Abstract{
    name;
    email;
    #password;

    constructor(){}

    #validateEmail(email){
        return true;
    }
    #validatePassword(password){
        return true;
    }
    signUp(name,email,password){
        let isValidate = false;

        isValidate = this.#validateEmail(email);
        isValidate &&= this.#validatePassword(password);

        if (isValidate) {
            this.name = name;
            this.email = email;
            this.password = password;
            console.log("Registered Successfully");
        } else {
            console.log("Please enter correct details!")
        }
    }
}

const person = new Abstract();
person.signUp('Vicky', 'vickywilliams@gmail.com', 'password');

person.login('vickywilliams@gmail.com', 'password');

person.signUp('williams', 'williamsvicky@gmail.com');
person.login('williams@gmail.com','williams');