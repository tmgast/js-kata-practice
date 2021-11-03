function removeChar(str){
    // ignore short strings
    if(str.length <3){
        return '';
    }

    // remove first and last character
    return str.slice(1,-1);
};


console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
console.log(removeChar('ooopsss'), 'oopss');