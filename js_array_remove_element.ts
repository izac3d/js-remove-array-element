
const arr: { id: number }[] = [{ id: 1 }, { id: 3 }, { id: 6 }];

const indexOfObject = arr.findIndex((object) => {
  return object.id === 3;
});

console.log(indexOfObject); 

if (indexOfObject !== -1) {
  arr.splice(indexOfObject, 1);
}

console.log(arr);
