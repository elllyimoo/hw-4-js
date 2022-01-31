function createNewUser(){
    let firstName = prompt ('What`s your name?');
    let lastName = prompt ('What`s your last name?');
    let newUser = {
        firstName,
        lastName,
        getLogin(){
            let login = firstName.substr(0, 1)+lastName;
            return console.log(login.toLowerCase());
        }
    }
    return newUser.getLogin()
}
createNewUser()