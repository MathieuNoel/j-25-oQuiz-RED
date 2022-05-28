const User = require('./userTable');
const QuizHasTag = require('./quiz_has_tag')

class Quiz extends User(QuizHasTag){
  #id
  #title
  #description
  #userId

  constructor({User, QuizHasTag}, id, title, description, userId) {
    super(User.id, User.email, User.password, User.firstname, User.lastname, QuizHasTag.id, QuizHasTag.tagId)
    this.#id = id;
    this.#title = title;
    this.#description = description;
    this.#userId  = userId;
  };

  get id() {
    this.#id = id;
  };

  get title() {
    this.#title = title;
  };

  set title(value) {
    if (value !== 'string') {
      throw new Error('title must be a string');      
    };
    this.#title = value;
  }

  get description() {
    this.#description = description;
  };

  set description(value) {
    if (value !== 'string') {
      throw new Error('description must be a string');
    };
    this.#description = value;
  }

  get userId() {
    this.#userId = userId;
  };
}

module.exports = Quiz;