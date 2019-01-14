////////////////////////////////////////////////////////////////
// LECTURE: FUNCTION CONSTRUTCTOR
/* var Projetos = function (nome, peso, prazo, valorDiario) {
    this.nome = nome;
    this.peso = peso;
    this.prazo = prazo;
    this.valorDiario = valorDiario
}

Projetos.prototype.valorTotal = function () {
    console.log('Projeto ' + this.nome + ' com o valor total de R$' + this.prazo * this.valorDiario);
}

Projetos.prototype.all = function () {
    console.log('Projeto: ' + this.nome + ', Peso: ' + this.peso + ', Prazo: ' + this.prazo + ', Valor Diário: ' + this.valorDiario);
}

var projeto001 = new Projetos('Portal C3', 'G - Grande', 15, 34.00);
var projeto002 = new Projetos('Portal C2', 'M - Médio', 8, 12.09);

// projeto001.valorTotal();
// projeto002.valorTotal();

projeto001.all();
console.log(projeto001.nome);
console.log(projeto001); */

////////////////////////////////////////////////////////////////
// LECTURE: OBJECT.CREATE
/* var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
}); */

////////////////////////////////////////////////////////////////
// LECTURE: PRIMITIVES VS OBJECTS

/* // Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city); */

////////////////////////////////////////////////////////////////
// LECTURE: PASSING FUNCTIONS AS ARGUMENTS
/* var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 + el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates); */

////////////////////////////////////////////////////////////////
// LECTURE: FUNCTIONS RETURNING FUNCTIONS
/* function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject Do you teach, ' + name);
        }
    } else {
        return function (name) {
            console.log('Hello, ' + name + '! What Do you do?');
        }
    }
}

// a variável atribuída passa a ser apontada como função de acordo com a condição
var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
var designerQuestion = interviewQuestion('designer');
designerQuestion('Josh');
var others = interviewQuestion('Developer');
others('Lucas');

// chamando a função com os parametros encadeados
interviewQuestion('teacher')('Lucas'); */

// MY TEST
/* function calcIMC(peso, altura) {
    var imc = Math.round(peso / (altura * altura));
    console.log('IMC: ' + imc);
    if (imc < 18) {
        return function (name) {
            console.log(name + ', você está ABAIXO DO PESO!');
        }
    } else if (imc >= 18 && imc < 24) {
        return function (name) {
            console.log(name + ', você está com o PESO NORMAL!')
        }
    } else if (imc >= 25 && imc < 29) {
        return function (name) {
            console.log(name + ', você está pré-obeso!');
        }
    } else {
        return function (name) {
            console.log(name + ', você está obeso!');
        }
    }
}

calcIMC(73, 1.80)('Lucas'); */

////////////////////////////////////////////////////////////////
// LECTURE: IIFE
/* function game() {
    var score = (Math.random() * 10) + 1;
    console.log(Math.round(score));
    console.log(score >= 5);
}
game(); */

// IIFE
/* (function () {
    var score = (Math.random() * 10) + 1;
    console.log(score >= 5);
})();
//console.log(score);

(function (goodLock) {
    var score = (Math.random() * 10) + 1;
    console.log(score >= 5 - goodLock);
})(5); */

////////////////////////////////////////////////////////////////
// LECTURE: CLOSURES: ENCERRAMENTOS
/* function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

    // Uma função interna sempre tem acesso às variáveis e parâmetros
    // de sua função externa, mesmo após a função externa ter retornado.


var retirementBrazil = retirement;
var retirementUSA = retirement;

retirementBrazil(65)(1994);
retirementUSA(66)(1968); */

// MY TEST - DESAFIO
/* function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello, ' + name + '! What do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher')('Rachel');
var designerQuestion = interviewQuestion('designer')('Joana');
var othersQuestion = interviewQuestion('developer')('Lucas'); */

////////////////////////////////////////////////////////////////
// LECTURE: BIND, CALL AND APPLY

/* var john = {
    name: 'John',
    age: 29,
    job: 'developer',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentLenes! I\'m ' + this.name + '. I\'am a ' +
                this.job + '. I\'am ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? ' + 'I\'m ' + this.name + '. I\'am a ' +
                this.job + '. I\'am ' + this.age + ' years old. Have a good ' + timeOfDay);
        }
    }
};
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// Método call - empréstimo de método -- Método de chamada
john.presentation.call(emily, 'friendly', 'afternoon');
// Método apply - o mesmo que o call, porém trabalha em forma de arrays
john.presentation.apply(emily, ['formal', 'morning']);
// Método bind - não chama imediatamente uma função, mas em vez disso,
// gera uma cópia da função para que possamos armazená-las.
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
emilyFormal('morning'); */

// --------------------------------------- //

/* var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}
                    //arr[]  //fn()
var ages = arrayCalc(years, calculateAge);
                               // não declarou o this, pq o bind pertence à mesma função
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan); */

////////////////////////////////////////////////////////////////
// DESAFIO
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// função que trás provacidade ao códido e não interefe no escopo de outro código.
/* (function() {
    // Construtor de Função
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };

    Question.prototype.displayQuestions = function() {
        console.log(this.question);

        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if(ans === this.correct) {
            console.log('Correct Answer!');
        } else {
            console.log('Wrong Answer. Try again :) ');
        }
    }

    // Instancias de Question
    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of the course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];

    var n = Math.floor((Math.random() * questions.length));

    questions[n].displayQuestions();

    var answer =  parseInt(prompt('Please select the correct answer.')); 

    questions[n].checkAnswer(answer);
})(); */

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

/* (function() {
    // Construtor de Função
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };

    Question.prototype.displayQuestions = function() {
        console.log(this.question);

        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callBack) {

        var sc;

        if(ans === this.correct) {
            console.log('Correct Answer!');

            //keepScore
            sc = callBack(true);

        } else {
            console.log('Wrong Answer. Try again :) ');

            sc = callBack(false);

        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('---------------------------------------')
    }

    // Instancias de Question
    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of the course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion () {

        var n = Math.floor((Math.random() * questions.length));
    
        questions[n].displayQuestions();
    
        var answer = prompt('Please select the correct answer.'); 
     
        if (answer !== 'exit' && answer !== 'Exit' && answer !== 'EXIT') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }

    }

    nextQuestion();

})(); */















