function printUser(user: {id: number, name: string}){
    console.log('User id: ' + user.id);
    console.log('User name: ' + user.name);
}

const user = {
    id: 1,
    name: 'Vinidu'
}

printUser(user);