const names = [
    'Lian',
    'Nico',
    'Paulino',
    'Thais',
    'Felipe',
    'Isa',
    'Lucas',
    'Guilherme',
    'Andrei'
]
  
function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

/*function getRndInteger(min, max) {

    return Math.floor(Math.random() * (max - min) ) + min;
  
}*/