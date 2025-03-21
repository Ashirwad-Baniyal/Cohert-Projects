function checkPalindrome(){
  const text=document.getElementById('textInput').value.toLowerCase();
  const res=document.getElementById('result');
  let cpy="";
  for(let a=0;a<text.length;a++){
    if(text[a]===' ')
    {
        continue;
    }
    cpy+=text[a];
  }
  console.log(cpy);
  console.log(typeof(cpy));
// split('') → Converts the string into an array of characters.
// reverse() → Reverses the array.
// join('') → Converts the reversed array back into a string.

  const rev=cpy.split('').reverse().join('');
  console.log(rev);
  console.log(typeof(rev));
  
  if(rev===cpy){
    res.style.removeProperty("color");
  res.innerText = `Pallindromic `
  }
  else{
    res.innerText= `Not Pallindromic`;
    res.style.removeProperty("color");
    res.style.color = "#FF0000";
  }

}