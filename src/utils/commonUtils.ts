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