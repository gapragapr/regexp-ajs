export default class Validator{
    constructor(userName){
        this.userName = userName;
    }

    validateUsername() {
      const regEx = /^[a-zA-Z]+[\w-]+[a-zA-Z]$/;
      const regEx2 = /\d{3}/;
      if (!regEx.test(this.userName) || regEx2.test(this.userName)){
        throw new Error('Invalid username')
      }

      return true
    }
}


const name = new Validator('qwety');
name.validateUsername()