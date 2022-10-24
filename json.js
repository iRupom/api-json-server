const user = {
    id: 23,
    name: 'Rakib Talukder Rupom',
    friends: ['rupom', 'mithu', 'shawn', 'takrim', 'amirul', 'emon'],
    friendsAge: [21, 22, 23, 24, 25, 26]
};

const userJSON = JSON.stringify(user);

console.log(userJSON);