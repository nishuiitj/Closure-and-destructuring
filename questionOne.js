function counter(){
    var Count = 0;
    return function(){
        console.log(Count++);
    }
}

const count = counter();

count();
count();
