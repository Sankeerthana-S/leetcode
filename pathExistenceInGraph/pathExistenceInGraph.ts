/**
 * Find whether path exists between nodes in the graph
 * 
 * @param n 
 * @param nums 
 * @param maxDiff 
 * @param queries 
 * @returns 
 */

// Time Complexity - O(n + q)
// Space Complexity - O(n + q) (O(n) auxiliary space + O(q) output space)
function pathExistenceInGraph(n: number, nums: number[], maxDiff: number, queries: number[][]): boolean[] {
    // Pre-allocation of memory reduces the time complexity
    const graphPath: number[] = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        // simplified union checks reduces the time complexity, space complexity and in terms of performance it is faster
        graphPath[i] = nums[i] - nums[i - 1] <= maxDiff ? graphPath[i - 1] : i
    }
    return queries.map(([i, j]) => graphPath[i] === graphPath[j])
}

console.log(pathExistenceInGraph(4, [2, 5, 6, 8], 2, [[0, 1], [0, 2], [1, 3], [2, 3]]))
console.log(pathExistenceInGraph(5, [8, 10, 25, 30, 38], 5, [[0, 1], [0, 2], [1, 3], [2, 3], [1, 4]]))