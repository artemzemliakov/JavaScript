
let arg = Number (prompt('Enter please number from 0 to 7'))
switch (arg) {
    case 0:
        console.log ('none'); 
        break;
    case 1:
        console.log ('execute only');
        break;
    case 2:
        console.log ('write only');
        break;
    case 3:
        console.log ('write and execute');
        break;
    case 4:
        console.log ('read only');
        break;
    case 5:
        console.log ('read and execute');
        break;
    case 6:
        console.log ('read and write');
        break;
    case 7:
        console.log ('read, write and execute');
        break;
    default: {
        console.log ('Incorrect value input!');
        alert ('Incorrect value input')
    }
    
}