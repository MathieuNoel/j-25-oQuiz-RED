const Quiz = require('./quizTable');
const Level = require('./levelTable');
const Answer = require('./answerTable');

class Question extends Level(Quiz, Answer) {
  #id
  #question
  #anecdote
  #wiki
  #levelId
  #answerId
  #quizId
  
  constructor({Level, User, Answer},id, question, anecdote, wiki, levelId, answerId, quizId) {
    super(Level.name, Level.id, User.id, User.email, User.password, User.firstname, User.lastname, Answer.id, Answer.descripton)
    this.#id = id;
    this.#question = question;
    this.#wiki = wiki;
    this.#levelId = levelId;
    this.#answerId = answerId;
    this.#quizId = quizId;
  }

  get id() {
    this.#id = id;
  };

  get question() {
    this.#question = question;
  };

  set question(value) {
    if (value !== 'string') {
      throw new Error('question must be a string');
    };
    this.#question = value;
  };

  get anecdote() {
    this.#anecdote = anecdote;
  };

  set anecdote(value) {
    if (value !== 'string') {
    throw new Error('anecdote must be a string');
    };
    this.#anecdote = value;
  };

  get wiki() {
    this.#wiki = wiki;
  };

  set wiki(value) {
    if(value !== 'string') {
      throw new Error('wiki must be a string');
    };
    this.#wiki = value;
  };

  get levelId() {
    this.#levelId = levelId;
  };

  get answerId() {
    this.#answerId = answerId;
  };

  get quizId() {
    this.#quizId = quizId;
  };
}

module.exports = Question;