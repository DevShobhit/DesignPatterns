// Strategy interface
interface SortStrategy<T> {
  sort(data: T[]): T[]
}

// Concrete Strategies
class BubbleSort<T> implements SortStrategy<T> {
  sort(data: T[]): T[] {
    console.log('Sorting data using Bubble Sort Algorithm')
    // TODO: Implement Bubble Sort logic
    return data
  }
}

class QuickSort<T> implements SortStrategy<T> {
  sort(data: T[]): T[] {
    console.log('Sorting data using Quick Sort Algorithm')
    // TODO: Implement Quick Sort logic
    return data
  }
}

class MergeSort<T> implements SortStrategy<T> {
  sort(data: T[]): T[] {
    console.log('Sorting data using Merge Sort Algorithm')
    // TODO: Implement Merge Sort logic
    return data
  }
}

// Context Class
class SortContext<T> {
  private sortStrategy: SortStrategy<T>

  constructor(sortStrategy: SortStrategy<T>) {
    this.sortStrategy = sortStrategy
  }

  setSortStrategy(sortStrategy: SortStrategy<T>): void {
    this.sortStrategy = sortStrategy
  }

  sort(data: T[]): T[] {
    return this.sortStrategy.sort(data)
  }
}

// client code

const dataToSort = [4, 2, 7, 1, 9, 3]
const bubbleSortStrategy = new BubbleSort<number>()
const quickSortStrategy = new QuickSort<number>()
const mergeSortStrategy = new MergeSort<number>()

const sortContext = new SortContext(bubbleSortStrategy)

// Sort data using Bubble Sort
const sortedData = sortContext.sort(dataToSort) // Sorting data using Bubble Sort Algorithm

// Later, change the sorting algorithm to Quick Sort
sortContext.setSortStrategy(quickSortStrategy)
const quickSortedData = sortContext.sort(dataToSort) // Sorting data using Quick Sort Algorithm

// Change the sorting algorithm to Merge Sort
sortContext.setSortStrategy(mergeSortStrategy)
const mergeSortedData = sortContext.sort(dataToSort) // Sorting data using Merge Sort Algorithm
