export function findUniqueItems({
  arr,
  searchItem,
}: {
  arr: any[] 
  searchItem: string 
}): any[] {
  if (searchItem === 'All Selected') return arr 
  let unique: any[] = [] 
  arr.forEach((item) => {
    if (item.role === searchItem) {
      unique.push({ id: item.id, name: item.name }) 
    }
  }) 
  return unique 
}

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout> 
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId) 
    timeoutId = setTimeout(() => fn.apply(this, args), ms) 
  } 
} 

export const getRandomNames = (
  arr: any[],
  n: number,
  sorting_order: string
): any[] => {
  const totalRandomValue = n 
  let uniqueRandomValue = new Set() 
  while (uniqueRandomValue.size < n) {
    randomizeValues(arr, uniqueRandomValue, totalRandomValue) 
  }
  let result =
    sorting_order !== 'Random'
      ? getSortedArray(shuffleValues([...uniqueRandomValue], sorting_order))
      : [...uniqueRandomValue] 
  return result 
} 

export const shuffleValues = (array: any[], sorting_order: string): any[] => {
  sorting_order === 'Random' &&
    array.sort(function () {
      return 1 - Math.random() 
    }) 
  return array 
} 

const randomizeValues = (
  array: any[],
  uniqueRandomValue: Set<any>,
  totalRandomValue: number
) => {
  array.map((item, index) => {
    if (uniqueRandomValue.size < totalRandomValue) {
      let uniqueItem = Math.floor((index + 1) * Math.random()) 
      uniqueRandomValue.add(array[uniqueItem]) 
    }
  }) 
} 

export const getSortedArray = (arr: any[]): any[] => {
  let tempArray = [...arr] 
  tempArray.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  ) 
  return tempArray 
} 

export const getSpeakerName = (length: number): number =>
  Math.floor(Math.random() * length) 
