const Quiz = require('./quizTable');
const Tag = require('./tagTable');

class QuizHasTag extends Quiz(Tag) {
  #id
  #quizId
  #tagId
  
  constructor({Quiz, Tag}, id, quizId, tagId) {
    super(Quiz.id, Quiz.title, Quiz.description, Tag.id, Tag.name)
    this.#id = id;
    this.#quizId = quizId;
    this.#tagId = tagId;
  };

  get id() {
    this.#id = id;
  };

  get quizId() {
    this.#quizId = quizId;    
  };

  get tagId() {
    this.#tagId = tagId;
  };
}

module.exports = QuizHasTag;

