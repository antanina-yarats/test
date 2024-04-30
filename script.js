

function same_chars(lollypop, index1, index2){
  
 
  if (lollypop.charAt(index1) === lollypop.charAt(index2)) {
    return true;
  }

  if(index2>lollypop.length){
    return false;
  }

  else{
    return false;
  }
}

const word = "lollypop";

console.log(same_chars(word,7,5));




    
