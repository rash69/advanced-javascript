const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannaaa'},
    {id: 41, name: 'Moyori'},
    {id: 71, name: 'Depuuuu'}
];



const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s=> s.id>40);
const bigger1 = students.find(s=> s.id>40);
console.log(bigger1);