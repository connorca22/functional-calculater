var buttons = document.querySelector('.buttons'); 
var calcArray = [];
var screen = document.querySelector('.screen');

buttons.addEventListener('click', (e) => {
  if (e.target.className == 'button button-number') {
    screen.value += e.target.getAttribute('value');
      calcArray.push(e.target.getAttribute('value'));
  } 
  else if(e.target.className == 'button button-operator') {
    calcArray.push(e.target.getAttribute('value'));
    screen.value += e.target.getAttribute('value');
  }
  else if(e.target.className == 'button button-utility clear-all') {
    screen.value = '';
    calcArray = [];
  }
  else if(e.target.className == 'button button-utility clear-last') {
    calcArray.splice(-1);
    screen.value = calcArray.join('');   
  }
  else if(e.target.className == 'button button-operator equals') {
    screen.value = eval(calcArray.join(''));
    console.log(calcArray);
  }  
  
});

//Updates needed
//change so that operator border changes to white when pressed and doesn't print to the screen
//remove border on operator when any other button is pressed
//can't have two operators pushed to calcArray in a row 
//when you press AC or CE, and then equal, value is undefined. also when you just press equal when no value in //array  ---> if(undefined), don't print anythign to scren value 
//remove need for eval, or sanitise

//CSS - Make responsive, max-height so fits within frame. Make mobile friendly 