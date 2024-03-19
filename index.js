function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <=400){
    return 'This one is on me!'
  }else if (distance >= 400 && distance <= 2000){
    return 'That will be twenty bucks.'
  }else if (distance >2000 && distance <=2500){
    return 'I will gladly take your thirty bucks.'
  }else if (distance >2500){
    return 'No can do.'
  }
}
function ternaryCheckCity(city){
  // Write your code here!
return (city ==='NYC')? 'Ok, sounds good.' :'No go.';

  console.log(ternaryCheckCity('NYC'));
  

}

function switchOnCharmFromTip(generosityLevel){
  // Write your code here!
  let response = 'Bye'
  switch (generosityLevel) {
    case 'generous':
      response = 'Thank you so much.'
      break;
    case 'not as generous':
      response = 'Thank you.'
      break;
      case 'If anything else':
        response = 'Bye.'
        break;
        default:
          response = 'Bye.';
  }
  return response;
}
console.log(switchOnCharmFromTip('generous'));