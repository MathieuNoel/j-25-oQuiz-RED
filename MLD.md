# MLD

niveau ( id, name )<br>
question ( id, description, anecdote, wiki,  #niveau(id), #quizz(id), #réponse(id) )<br>
réponse ( id, description, #question(id) )<br>
utilisateur ( id, prénom, nom, email, mot de passe )<br>
quizz ( id, titre, description, #utilisateur(id) )<br>
catégorie ( id, nom )<br>
quizz_has_tag ( #quizz(id), #tag(id) )<br>