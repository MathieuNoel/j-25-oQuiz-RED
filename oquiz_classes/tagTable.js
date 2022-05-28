class Tag {
  #id
  #name

  constructor(id, name) {
    this.#id = id;
    this.#name = name;
  };

  get id() {
    this.#id = id;
  };

  get name() {
    this.#name = name;
  };

  set name(value) {
    if (value !== 'string') {
      throw new Error('name must be a string');
    };
    this.#name = value;
  };
}

module.exports = Tag;