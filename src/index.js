const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let letters = [''];
  let k = 0;
   for (i=0; i<expr.length-1;i=i+2)
   {
    if (!(expr[i]=="0" && 
    expr[i+1]=="0")) 
    {letters[k] = letters[k]+expr[i]+expr[i+1];
    }
    if ((i+2)%10 === 0 && (i<expr.length-2)) {k++; letters[k] = '';  
                       }
    } 
  let ans = [];
  for (i = 0; i<letters.length;i++){
    ans[i]='';
    if (letters[i][0] == '*') {ans[i] = ' '}
   else for (j = 0; j<letters[i].length;j = j+2) {
    if (letters[i][j] == '1' && letters[i][j+1] == '1') {ans[i]=ans[i]+ '-';}
      else {ans[i]=ans[i]+ '.';}
  }  
 }
  let ans2= [];
  for(i = 0; i<ans.length;i++)
    { if (ans[i] == ' ') ans2[i] = ' '
     else ans2[i] = MORSE_TABLE[ans[i]];
     }
  answer=ans2.join('');
return answer; 
}
module.exports = {
    decode
}