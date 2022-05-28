const Question = require('./questionTable');

class Answer extends Question {
  #id
  #description
  #questionId

  constructor({Question}, id, description, questionId) {
    super(Question.id, Question.question, Question.#anecdote, Question.#wiki, Question.#levelId, Question.#answerId, Question.#quizId);
    this.#id = id;
    this.#description = description;
    this.#questionId = questionId;
  };

  get id() {
    this.#id = id;
  };

  get description() {
    this.#description = description;
  };

  set description(value) {
    if (value !== 'string') {
      throw new Error('description must be a string');      
    };
    this.#description = value;
  }

  get question() {
    this.#questionId = questionId;
  }
}

module.exports = Answer;