export function findUniqueItems(arr: any[], searchItem:string): any[] {
    var unique: any[] = [];
    var tempArr: any[] = [];
    arr.forEach((item) => {
        if (tempArr.indexOf(item[searchItem]) === -1 && item[searchItem] !== undefined) {
            tempArr.push(item[searchItem]);
            unique.push({id: item.id, value: item[searchItem]});
        }
    });
    return unique
}

export const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };