'use strict';

class First {
    hello (){
        console.log('Привет я метод родителя!');
    }
}

class Second extends First{
    hello (){
    super.hello();
    this.heir();
    }
    heir (){
        console.log('А я наследуемый метод!');
    }
}

const first = new First();
const second = new Second();

first.hello();
second.hello();