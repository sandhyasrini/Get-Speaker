export function findUniqueItems(arr: any[], searchItem: string): any[] {
  var unique: any[] = [];
  var tempArr: any[] = [];
  arr.forEach((item) => {
    if (
      tempArr.indexOf(item[searchItem]) === -1 &&
      item[searchItem] !== undefined
    ) {
      tempArr.push(item[searchItem]);
      unique.push({ id: item.id, value: item[searchItem] });
    }
  });
  return unique;
}

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const getRandomNames = (arr: any[], n: number): any[] => {
  const totalRandomValue = n;
  let uniqueRandomValue = new Set();
  while (uniqueRandomValue.size < n) {
    randomizeValues(arr, uniqueRandomValue, totalRandomValue);
  }
  let result = shuffleValues([...uniqueRandomValue]);
  return result;
};

export const shuffleValues = (array: any[]): any[] => {
  var copy = [].concat([...array]);
  copy.sort(function () {
    return 0.2 - Math.random();
  });
  return copy;
};

const randomizeValues = (
  array: any[],
  uniqueRandomValue: Set<any>,
  totalRandomValue: number
) => {
  array.map((item, index) => {
    if (uniqueRandomValue.size < totalRandomValue) {
      let uniqueItem = Math.floor((index + 1) * Math.random());
      uniqueRandomValue.add(array[uniqueItem]);
    }
  });
};

export const getSortedArray = (arr: any[]): any[] => {
let tempArray = [...arr]
  tempArray.sort((a, b) => 
  {
  return a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
})
  return tempArray;
};
