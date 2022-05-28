class Level {
  #id;
  #name;

  constructor({id, name}) {
    this.#id = id;
    this.#name = name;
  };

  get id() {
    return this.#id;
  };

  get name() {
    return this.#name;
  };

  set name(value) {
    if(value !== 'string'){
      throw new Error('name must be a sting');
    }
    this.#name = value;
  };


};

module.exports = Level;