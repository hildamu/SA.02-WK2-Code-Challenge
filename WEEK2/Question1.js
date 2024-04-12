let caseSwapping = function(letters){
    let swappedletters = "";
    for(let i = 0; i<letters.length; i++){
        if (letters[i] ===letters[i].toLowerCase() ){
            swappedletters +=letters[i].toUpperCase();
        }else{
            swappedletters += letters[i].toLowerCase();
        }
    }
    console.log(swappedletters);
    return swappedletters;
}

let text = 'The Quick Brown Fox' ;
let swappedText = caseSwapping(text);
