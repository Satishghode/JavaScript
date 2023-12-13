const arr = [1, 3, 4, 5, 5, 6, 7];

for (const array of arr) {
    // console.log(array);
}


const names = "satish";
for (const name of names) {
    // console.log(name);
}

for (const iterator of arr) {
    // console.log(iterator);
}

//applied a for of loop in map 
const map = new Map();

map.set('IN','India');
map.set('USA','United state of America');
map.set('Fra','France');

for (const maps of map) {
    // console.log(maps);

}


// applied a forin Or forof loop on Array Object .

const obj =[
    {
        name : 'satish',
        midName: 'Bhasker',
        sirName: 'Ghode',
        phoneNumber: 90754114838,
        location: 'Sukewadi tal.Sangamner Dis A-Ngar '
    },
    {
        name : 'Jyoti',
        midName: 'Bhasker',
        sirName: 'Ghode',
        phoneNumber: 90754114838,
        location: 'Sukewadi tal.Sangamner Dis A-Ngar '
    },
    {
        name : 'swati',
        midName: 'Bhasker',
        sirName: 'Ghode',
        phoneNumber: 90754114838,
        location: 'Sukewadi tal.Sangamner Dis A-Ngar '
    },
    {
        name : 'Sangita',
        midName: 'Bhasker',
        sirName: 'Ghode',
        phoneNumber: 90754114838,
        location: 'Sukewadi tal.Sangamner Dis A-Ngar '
    },

]


for (const object of obj) {
    // console.log(object);   
}


const myObject = {
        name : 'satish',
        midName: 'Bhasker',
        sirName: 'Ghode',
        phoneNumber: 90754114838,
        location: 'Sukewadi tal.Sangamner Dis A-Ngar '
}

// using the forof loop Object can't iterable. It possiable using the for in loop 
for (const obj of myObject) {
    console.log(obj);
}

