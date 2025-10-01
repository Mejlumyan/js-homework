                                                    Sorting Algorithms

This document contains explanations and complexities for  sorting algorithms.
----------------------------------------------------------------------------------------

                                                   Bubble Sort

**Description:**  
Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements,
and swaps them if they are in the wrong order. The process continues until the array is sorted.

**How it works:**  
1. Compare each pair of adjacent elements in the array.  
2. Swap them if they are in the wrong order.  
3. Repeat until no swaps are needed.

**Time Complexity:**  
- Best case: O(n) – array already sorted, one pass only.  
- Average case: O(n²) – random order.  
- Worst case: O(n²) – array sorted in reverse order.  

**Space Complexity:** O(1) – in-place.  
**Stability:** Stable – equal elements retain relative order.

---------------------------------------------------------------

                                                Insertion Sort

**Description:**  
Insertion Sort builds the sorted array one element at a time. It picks elements from the unsorted part and inserts them into the correct position in the sorted part.

**How it works:**  
1. Start from the second element of the array.  
2. Compare it with elements in the sorted part and shift larger elements to the right.  
3. Insert the current element into its correct position.  
4. Repeat until the array is sorted.

**Time Complexity:**  
- Best case: O(n) – array already sorted.  
- Average case: O(n²) – random order.  
- Worst case: O(n²) – reverse order.

**Space Complexity:** O(1) – in-place.  
**Stability:** Stable.

---------------------------------------------------------------

                                                 Selection Sort

**Description:**  
Selection Sort repeatedly finds the minimum element from the unsorted part and places it at the beginning.

**How it works:**  
1. Divide the array into sorted and unsorted parts.  
2. Find the minimum element in the unsorted part.  
3. Swap it with the first element of the unsorted part.  
4. Repeat until sorted.

**Time Complexity:**  
- Best/Average/Worst: O(n²) – comparisons are always needed.  

**Space Complexity:** O(1) – in-place.  
**Stability:** Unstable – equal elements may change order.

---------------------------------------------------------------

                                                      Counting Sort

**Description:**  
Counting Sort is a non-comparison-based algorithm. It counts occurrences of each distinct element and uses cumulative counts to place elements correctly. Best for arrays with small integer ranges.

**How it works:**  
1. Count occurrences of each element.  
2. Compute cumulative counts.  
3. Place elements into the output array based on counts.  
4. Can handle negative integers by adjusting the counting array with minimum value.

**Time Complexity:**  
- Best/Average/Worst: O(n + k), where k is the range of values.  

**Space Complexity:** O(n + k) – requires counting and output arrays.  
**Stability:** Stable.

**Efficient when:**  
- k (range of numbers) is small relative to n.  
- Input contains integers or elements mappable to integers.  
- Stability is required.

💡 Note: For large k, memory consumption may be high; comparison-based algorithms may be better.

---------------------------------------------------------------

                                                       Merge Sort

**Description:**  
Merge Sort is a divide-and-conquer comparison-based algorithm. It divides the array into two halves, recursively sorts each half, and then merges the sorted halves into one array. It is stable and works well for large datasets.

**How it works:**  
1. Divide the array into two halves until each subarray has only one element.  
2. Recursively sort the left and right halves.  
3. Merge the two sorted halves into one array.

**Time Complexity:**  
- Best/Average/Worst: O(n log n)  

**Space Complexity:** O(n) – requires extra memory for merging.  
**Stability:** Stable.

---------------------------------------------------------------

                                                      Quick Sort

**Description:**  
Quick Sort is a divide-and-conquer sorting algorithm. It selects a pivot element, partitions the array into two parts (less than pivot and greater than or equal to pivot), recursively sorts each part, and combines them into a sorted array.

**How it works:**  
1. Choose a pivot element – usually first, last, or random.  
2. Partition the array into two subarrays: elements less than pivot and elements greater than or equal to pivot.  
3. Recursively apply Quick Sort to the left and right subarrays.  
4. Combine the results (pivot is already in its correct position after partitioning).

**Time Complexity:**  
- Best case: O(n log n) – even partitions.  
- Average case: O(n log n) – efficient on average.  
- Worst case: O(n²) – highly unbalanced partitions.

**Space Complexity:** O(log n) – recursion stack (in-place).  
**Stability:** Unstable – equal elements may not retain original order.

---------------------------------------------------------------

                                      Complexity Table

| Algorithm       | Best Case | Average Case | Worst Case | Space Complexity | Stable? |
|-----------------|-----------|--------------|------------|-----------------|---------|
| Bubble Sort     | O(n)      | O(n²)        | O(n²)      | O(1)            | Yes     |
| Insertion Sort  | O(n)      | O(n²)        | O(n²)      | O(1)            | Yes     |
| Selection Sort  | O(n²)     | O(n²)        | O(n²)      | O(1)            | No      |
| Counting Sort   | O(n + k)  | O(n + k)     | O(n + k)   | O(n + k)        | Yes     |
| Merge Sort      | O(n log n)| O(n log n)   | O(n log n) | O(n)            | Yes     |
| Quick Sort      | O(n log n)| O(n log n)   | O(n²)      | O(log n)        | No      |
