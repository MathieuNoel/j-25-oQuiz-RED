class User {
  #id;
  #email;
  #password;
  #firstname;
  #lastname;

  constructor({id, email, password, firstname, lastname}) {
    this.#id = id;
    this.#email = email;
    this.#password = password;
    this.#firstname = firstname;
    this.#lastname = lastname;
  };

  get id() {
    return this.#id;
  };

  get email() {
    return this.#email;
  };

  set email(value) {
    if(value !== 'string') {
      throw new Error('email must be a string');
    }
    this.#email = value;
  }

  get password() {
    return this.#password;
  };

  get firstname() {
    return this.#firstname;
  };

  set firstname(value) {
    if (value !== 'string') {
      throw new Error('firstname must be a string');
    }
    this.#firstname = value;
  };

  get lastname() {
    return this.#lastname;
  };

  set lastname(value) {
    if (value !== 'string') {
      throw new Error('lastname must be a string');
    }
    this .#lastname = value;
  };
};

maodule.exports = user;