export type Difficulty = "Easy" | "Medium" | "Hard";
export type Domain = "DSA" | "WebDev" | "AIML" | "DBMS" | "OS" | "OOPS";
export type Status = "solved" | "attempted" | "unsolved" | "bookmarked";

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  domain: Domain;
  tags: string[];
  status: Status;
  acceptance: number;
  submissions: number;
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
  hints: string[];
  starterCode: string;
  solution: string;
  timeComplexity: string;
  spaceComplexity: string;
  videoUrl?: string;
  likes: number;
  dislikes: number;
}

export interface Sheet {
  id: string;
  name: string;
  author: string;
  description: string;
  totalProblems: number;
  solved: number;
  topics: string[];
  color: string;
  problems: SheetProblem[];
}

export interface SheetProblem {
  id: string;
  title: string;
  difficulty: Difficulty;
  topic: string;
  status: Status;
  leetcodeLink?: string;
  notes?: string;
}

export interface Note {
  id: string;
  problemId: string;
  problemTitle: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

export interface Playlist {
  id: string;
  title: string;
  channel: string;
  topic: string;
  videoCount: number;
  rating: number;
  url: string;
  isHidden: boolean;
  thumbnail: string;
  description: string;
}

export const problems: Problem[] = [
  {
    id: "1",
    title: "Two Sum",
    difficulty: "Easy",
    domain: "DSA",
    tags: ["Array", "Hash Table"],
    status: "solved",
    acceptance: 49.2,
    submissions: 12450000,
    likes: 52100,
    dislikes: 1700,
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.`,
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" }
    ],
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9", "Only one valid answer exists."],
    hints: [
      "Think about what complement you need for each number.",
      "Can you use a data structure to store numbers you've seen?",
      "Hash map stores {value: index} — for each num, check if target-num exists in map."
    ],
    starterCode: `function twoSum(nums: number[], target: number): number[] {\n    // Your code here\n};`,
    solution: `function twoSum(nums: number[], target: number): number[] {\n    const map = new Map<number, number>();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (map.has(complement)) return [map.get(complement)!, i];\n        map.set(nums[i], i);\n    }\n    return [];\n};`,
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)"
  },
  {
    id: "2",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    domain: "DSA",
    tags: ["String", "Sliding Window", "Hash Table"],
    status: "attempted",
    acceptance: 33.8,
    submissions: 9800000,
    likes: 37200,
    dislikes: 1600,
    description: `Given a string \`s\`, find the length of the longest substring without repeating characters.`,
    examples: [
      { input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc", with the length of 3.' },
      { input: 's = "bbbbb"', output: "1", explanation: 'The answer is "b", with the length of 1.' }
    ],
    constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."],
    hints: [
      "Use a sliding window approach.",
      "Maintain a set of characters in the current window.",
      "When you find a duplicate, shrink the window from the left."
    ],
    starterCode: `function lengthOfLongestSubstring(s: string): number {\n    // Your code here\n};`,
    solution: `function lengthOfLongestSubstring(s: string): number {\n    const set = new Set<string>();\n    let left = 0, max = 0;\n    for (let right = 0; right < s.length; right++) {\n        while (set.has(s[right])) { set.delete(s[left]); left++; }\n        set.add(s[right]);\n        max = Math.max(max, right - left + 1);\n    }\n    return max;\n};`,
    timeComplexity: "O(n)",
    spaceComplexity: "O(min(m,n))"
  },
  {
    id: "3",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    domain: "DSA",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    status: "unsolved",
    acceptance: 38.1,
    submissions: 4200000,
    likes: 24500,
    dislikes: 2800,
    description: `Given two sorted arrays \`nums1\` and \`nums2\` of size \`m\` and \`n\` respectively, return the median of the two sorted arrays.\n\nThe overall run time complexity should be O(log (m+n)).`,
    examples: [
      { input: "nums1 = [1,3], nums2 = [2]", output: "2.00000", explanation: "merged array = [1,2,3] and median is 2." },
      { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.50000", explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5." }
    ],
    constraints: ["nums1.length == m", "nums2.length == n", "0 <= m <= 1000", "0 <= n <= 1000"],
    hints: [
      "Think about binary search on the smaller array.",
      "Partition both arrays such that left half has (m+n+1)/2 elements.",
      "Check if partition is valid: max(left1) <= min(right2) && max(left2) <= min(right1)."
    ],
    starterCode: `function findMedianSortedArrays(nums1: number[], nums2: number[]): number {\n    // Your code here\n};`,
    solution: `// Binary search approach - O(log(min(m,n)))\nfunction findMedianSortedArrays(nums1: number[], nums2: number[]): number {\n    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n    // ... binary search logic\n    return 0;\n};`,
    timeComplexity: "O(log(min(m,n)))",
    spaceComplexity: "O(1)"
  },
  {
    id: "4",
    title: "Valid Parentheses",
    difficulty: "Easy",
    domain: "DSA",
    tags: ["String", "Stack"],
    status: "solved",
    acceptance: 40.6,
    submissions: 5600000,
    likes: 19800,
    dislikes: 900,
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" }
    ],
    constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."],
    hints: [
      "Use a stack data structure.",
      "Push opening brackets, pop when closing bracket found.",
      "Check if popped bracket matches the current closing bracket."
    ],
    starterCode: `function isValid(s: string): boolean {\n    // Your code here\n};`,
    solution: `function isValid(s: string): boolean {\n    const stack: string[] = [];\n    const map: Record<string, string> = { ')': '(', '}': '{', ']': '[' };\n    for (const c of s) {\n        if (!map[c]) stack.push(c);\n        else if (stack.pop() !== map[c]) return false;\n    }\n    return stack.length === 0;\n};`,
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)"
  },
  {
    id: "5",
    title: "Maximum Subarray",
    difficulty: "Medium",
    domain: "DSA",
    tags: ["Array", "Dynamic Programming", "Divide and Conquer"],
    status: "solved",
    acceptance: 49.9,
    submissions: 7800000,
    likes: 31200,
    dislikes: 1300,
    description: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." }
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    hints: [
      "Kadane's Algorithm is the key.",
      "Keep track of current sum and max sum.",
      "If current sum becomes negative, reset it to 0."
    ],
    starterCode: `function maxSubArray(nums: number[]): number {\n    // Your code here\n};`,
    solution: `function maxSubArray(nums: number[]): number {\n    let max = nums[0], curr = nums[0];\n    for (let i = 1; i < nums.length; i++) {\n        curr = Math.max(nums[i], curr + nums[i]);\n        max = Math.max(max, curr);\n    }\n    return max;\n};`,
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)"
  },
  {
    id: "6",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    domain: "DSA",
    tags: ["Linked List", "Recursion"],
    status: "unsolved",
    acceptance: 61.5,
    submissions: 6200000,
    likes: 19600,
    dislikes: 400,
    description: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.",
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" }
    ],
    constraints: ["The number of nodes in both lists is in the range [0, 50]."],
    hints: ["Compare head nodes", "Recursively merge", "Handle null cases"],
    starterCode: `function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {\n    // Your code here\n};`,
    solution: `// Iterative approach`,
    timeComplexity: "O(m+n)",
    spaceComplexity: "O(1)"
  },
  {
    id: "7",
    title: "Implement a REST API with Express",
    difficulty: "Medium",
    domain: "WebDev",
    tags: ["Node.js", "Express", "REST API"],
    status: "unsolved",
    acceptance: 72.3,
    submissions: 890000,
    likes: 4200,
    dislikes: 120,
    description: "Build a RESTful API with Express.js that handles CRUD operations for a Todo application. Include proper error handling, middleware, and status codes.",
    examples: [
      { input: "POST /todos with body {title: 'Buy milk'}", output: "201 Created with todo object" }
    ],
    constraints: ["Use Express.js", "Implement all 4 CRUD operations", "Use proper HTTP status codes"],
    hints: ["Start with Express setup", "Define routes for GET, POST, PUT, DELETE", "Use middleware for error handling"],
    starterCode: `const express = require('express');\nconst app = express();\n\n// Your code here\n\napp.listen(3000);`,
    solution: `// Full Express CRUD implementation`,
    timeComplexity: "N/A",
    spaceComplexity: "N/A"
  },
  {
    id: "8",
    title: "What is Gradient Descent?",
    difficulty: "Easy",
    domain: "AIML",
    tags: ["ML Basics", "Optimization"],
    status: "solved",
    acceptance: 85.2,
    submissions: 456000,
    likes: 6700,
    dislikes: 200,
    description: "Multiple choice: Which statement best describes Gradient Descent?",
    examples: [
      { input: "A) An algorithm that maximizes the loss function\nB) An iterative optimization algorithm that minimizes a function\nC) A sorting algorithm\nD) A data preprocessing technique", output: "B" }
    ],
    constraints: ["Select the most accurate answer"],
    hints: ["Think about what 'gradient' means in calculus", "Consider the direction of optimization"],
    starterCode: `// Select your answer: A, B, C, or D`,
    solution: `// B - Gradient Descent iteratively updates parameters in the direction of steepest descent`,
    timeComplexity: "N/A",
    spaceComplexity: "N/A"
  },
  {
    id: "9",
    title: "Normalize a Database to 3NF",
    difficulty: "Medium",
    domain: "DBMS",
    tags: ["Normalization", "3NF", "FDs"],
    status: "unsolved",
    acceptance: 45.8,
    submissions: 234000,
    likes: 3100,
    dislikes: 340,
    description: "Given a relation R(A, B, C, D) with functional dependencies, normalize it to Third Normal Form (3NF).",
    examples: [
      { input: "R(StudentID, CourseID, Instructor, Room)\nFDs: StudentID,CourseID → Instructor; Instructor → Room", output: "Decompose into:\nR1(StudentID, CourseID, Instructor)\nR2(Instructor, Room)" }
    ],
    constraints: ["No partial dependencies", "No transitive dependencies", "Preserve all FDs"],
    hints: ["First check for 2NF violations", "Identify transitive dependencies", "Decompose to remove them"],
    starterCode: `// Write your normalization steps here`,
    solution: `// Step 1: Check 1NF -> 2NF -> 3NF`,
    timeComplexity: "N/A",
    spaceComplexity: "N/A"
  },
  {
    id: "10",
    title: "Deadlock Prevention Strategies",
    difficulty: "Hard",
    domain: "OS",
    tags: ["Deadlock", "Process Synchronization"],
    status: "bookmarked",
    acceptance: 41.2,
    submissions: 178000,
    likes: 2800,
    dislikes: 290,
    description: "Explain and implement deadlock prevention using Banker's Algorithm for the given resource allocation scenario.",
    examples: [
      { input: "Processes: P1, P2, P3\nResources: A=10, B=5, C=7\nAllocation matrix given...", output: "Safe sequence: P1 → P3 → P2" }
    ],
    constraints: ["Must identify all 4 Coffman conditions", "Implement safe state detection"],
    hints: ["Remember 4 conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait", "Banker's needs Available, Max, Allocation matrices", "Check if safe sequence exists"],
    starterCode: `// Implement Banker's Algorithm`,
    solution: `// Full Banker's Algorithm implementation`,
    timeComplexity: "O(n²r) where r = resources",
    spaceComplexity: "O(nr)"
  },
  {
    id: "11",
    title: "Implement Polymorphism",
    difficulty: "Easy",
    domain: "OOPS",
    tags: ["Polymorphism", "Inheritance", "OOP"],
    status: "unsolved",
    acceptance: 78.4,
    submissions: 567000,
    likes: 4500,
    dislikes: 150,
    description: "Implement runtime polymorphism using an Animal class hierarchy. Create a base class Animal with a speak() method and derived classes Dog, Cat, Bird.",
    examples: [
      { input: "Animal* a = new Dog(); a->speak();", output: '"Woof!"' }
    ],
    constraints: ["Use virtual functions", "Demonstrate dynamic dispatch", "Include at least 3 derived classes"],
    hints: ["Use virtual keyword", "Override in derived classes", "Use base class pointer"],
    starterCode: `class Animal {\npublic:\n    virtual void speak() = 0; // Pure virtual\n};`,
    solution: `// Full polymorphism example`,
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)"
  },
  {
    id: "12",
    title: "Binary Search",
    difficulty: "Easy",
    domain: "DSA",
    tags: ["Array", "Binary Search"],
    status: "solved",
    acceptance: 55.3,
    submissions: 8900000,
    likes: 22400,
    dislikes: 600,
    description: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.",
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" }
    ],
    constraints: ["1 <= nums.length <= 10^4"],
    hints: ["Keep track of left and right pointers", "Check the middle element", "Eliminate half the search space each time"],
    starterCode: `function search(nums: number[], target: number): number {\n    // Your code here\n};`,
    solution: `function search(nums: number[], target: number): number {\n    let l = 0, r = nums.length - 1;\n    while (l <= r) {\n        const m = Math.floor((l + r) / 2);\n        if (nums[m] === target) return m;\n        if (nums[m] < target) l = m + 1;\n        else r = m - 1;\n    }\n    return -1;\n};`,
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)"
  },
  {
    id: "13",
    title: "Climbing Stairs",
    difficulty: "Easy",
    domain: "DSA",
    tags: ["Dynamic Programming", "Math"],
    status: "attempted",
    acceptance: 51.8,
    submissions: 7200000,
    likes: 21300,
    dislikes: 700,
    description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    examples: [
      { input: "n = 3", output: "3", explanation: "1+1+1, 1+2, 2+1" }
    ],
    constraints: ["1 <= n <= 45"],
    hints: ["This is Fibonacci!", "dp[i] = dp[i-1] + dp[i-2]", "Base cases: dp[1]=1, dp[2]=2"],
    starterCode: `function climbStairs(n: number): number {\n    // Your code here\n};`,
    solution: `function climbStairs(n: number): number {\n    if (n <= 2) return n;\n    let a = 1, b = 2;\n    for (let i = 3; i <= n; i++) [a, b] = [b, a + b];\n    return b;\n};`,
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)"
  },
  {
    id: "14",
    title: "LRU Cache",
    difficulty: "Medium",
    domain: "DSA",
    tags: ["Hash Table", "Linked List", "Design"],
    status: "unsolved",
    acceptance: 42.5,
    submissions: 3400000,
    likes: 18900,
    dislikes: 800,
    description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    examples: [
      { input: 'LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2);', output: "[-1] // 2 was evicted" }
    ],
    constraints: ["1 <= capacity <= 3000", "All operations in O(1)"],
    hints: ["Combine HashMap + Doubly Linked List", "HashMap for O(1) lookup", "DLL for O(1) insertion/deletion of LRU"],
    starterCode: `class LRUCache {\n    constructor(capacity: number) {}\n    get(key: number): number {}\n    put(key: number, value: number): void {}\n}`,
    solution: `// HashMap + Doubly Linked List approach`,
    timeComplexity: "O(1) for get/put",
    spaceComplexity: "O(capacity)"
  },
  {
    id: "15",
    title: "Word Search",
    difficulty: "Medium",
    domain: "DSA",
    tags: ["Array", "Backtracking", "DFS"],
    status: "bookmarked",
    acceptance: 39.8,
    submissions: 2900000,
    likes: 14700,
    dislikes: 620,
    description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true" }
    ],
    constraints: ["m == board.length", "n = board[i].length", "1 <= m, n <= 6"],
    hints: ["Use DFS + Backtracking", "Mark visited cells", "Restore cell after backtrack"],
    starterCode: `function exist(board: string[][], word: string): boolean {\n    // Your code here\n};`,
    solution: `// DFS Backtracking`,
    timeComplexity: "O(m * n * 4^L)",
    spaceComplexity: "O(L)"
  }
];

export const sheets: Sheet[] = [
  {
    id: "striver-sde",
    name: "Striver's SDE Sheet",
    author: "Raj Vikramaditya (Striver)",
    description: "Top 191 DSA problems covering all important interview topics. Used by lakhs of students for FAANG prep.",
    totalProblems: 191,
    solved: 47,
    color: "#f97316",
    topics: ["Arrays", "Linked List", "DP", "Trees", "Graphs", "Recursion", "Binary Search"],
    problems: [
      { id: "s1", title: "Set Matrix Zeroes", difficulty: "Medium", topic: "Arrays", status: "solved" },
      { id: "s2", title: "Pascal's Triangle", difficulty: "Easy", topic: "Arrays", status: "solved" },
      { id: "s3", title: "Next Permutation", difficulty: "Medium", topic: "Arrays", status: "attempted" },
      { id: "s4", title: "Kadane's Algorithm", difficulty: "Medium", topic: "Arrays", status: "solved" },
      { id: "s5", title: "Sort Colors", difficulty: "Medium", topic: "Arrays", status: "unsolved" },
      { id: "s6", title: "Stock Buy & Sell", difficulty: "Easy", topic: "Arrays", status: "solved" },
      { id: "s7", title: "Rotate Matrix", difficulty: "Medium", topic: "Arrays", status: "unsolved" },
      { id: "s8", title: "Merge Overlapping Subintervals", difficulty: "Medium", topic: "Arrays", status: "attempted" },
      { id: "s9", title: "Merge Two Sorted Arrays", difficulty: "Hard", topic: "Arrays", status: "unsolved" },
      { id: "s10", title: "Find Duplicate in Array", difficulty: "Medium", topic: "Arrays", status: "solved" },
      { id: "s11", title: "Reverse Linked List", difficulty: "Easy", topic: "Linked List", status: "solved" },
      { id: "s12", title: "Middle of Linked List", difficulty: "Easy", topic: "Linked List", status: "solved" },
      { id: "s13", title: "Merge Two Sorted Lists", difficulty: "Easy", topic: "Linked List", status: "attempted" },
      { id: "s14", title: "Remove Nth Node From End", difficulty: "Medium", topic: "Linked List", status: "unsolved" },
      { id: "s15", title: "Delete Given Node", difficulty: "Medium", topic: "Linked List", status: "solved" },
      { id: "s16", title: "Recursion - Fibonacci", difficulty: "Easy", topic: "Recursion", status: "solved" },
      { id: "s17", title: "Pow(x, n)", difficulty: "Medium", topic: "Recursion", status: "solved" },
      { id: "s18", title: "Subsets", difficulty: "Medium", topic: "Recursion", status: "attempted" },
      { id: "s19", title: "Binary Search", difficulty: "Easy", topic: "Binary Search", status: "solved" },
      { id: "s20", title: "Search in Rotated Array", difficulty: "Medium", topic: "Binary Search", status: "attempted" },
    ]
  },
  {
    id: "love-babbar-450",
    name: "Love Babbar's DSA 450",
    author: "Love Babbar",
    description: "450 handpicked DSA questions in a structured format. Perfect for systematic preparation.",
    totalProblems: 450,
    solved: 23,
    color: "#8b5cf6",
    topics: ["Arrays", "Strings", "Trees", "Graphs", "DP", "Backtracking", "Heaps"],
    problems: [
      { id: "l1", title: "Reverse Array", difficulty: "Easy", topic: "Arrays", status: "solved" },
      { id: "l2", title: "Find Min Max in Array", difficulty: "Easy", topic: "Arrays", status: "solved" },
      { id: "l3", title: "Kth Largest Element", difficulty: "Medium", topic: "Arrays", status: "attempted" },
      { id: "l4", title: "Sort 0s, 1s, 2s", difficulty: "Easy", topic: "Arrays", status: "solved" },
      { id: "l5", title: "Move Negative Numbers", difficulty: "Easy", topic: "Arrays", status: "unsolved" },
      { id: "l6", title: "Union and Intersection", difficulty: "Medium", topic: "Arrays", status: "unsolved" },
      { id: "l7", title: "Cyclically Rotate Array", difficulty: "Easy", topic: "Arrays", status: "solved" },
      { id: "l8", title: "Largest Sum Contiguous Subarray", difficulty: "Medium", topic: "Arrays", status: "solved" },
      { id: "l9", title: "Minimize Heights", difficulty: "Medium", topic: "Arrays", status: "attempted" },
      { id: "l10", title: "Reverse String", difficulty: "Easy", topic: "Strings", status: "solved" },
    ]
  },
  {
    id: "neetcode-150",
    name: "NeetCode 150",
    author: "NeetCode",
    description: "150 best LeetCode problems organized by pattern. Ideal for pattern-based learning.",
    totalProblems: 150,
    solved: 68,
    color: "#22c55e",
    topics: ["Arrays & Hashing", "Two Pointers", "Sliding Window", "Stack", "Binary Search", "Linked List", "Trees"],
    problems: [
      { id: "n1", title: "Contains Duplicate", difficulty: "Easy", topic: "Arrays & Hashing", status: "solved" },
      { id: "n2", title: "Valid Anagram", difficulty: "Easy", topic: "Arrays & Hashing", status: "solved" },
      { id: "n3", title: "Two Sum", difficulty: "Easy", topic: "Arrays & Hashing", status: "solved" },
      { id: "n4", title: "Group Anagrams", difficulty: "Medium", topic: "Arrays & Hashing", status: "solved" },
      { id: "n5", title: "Top K Frequent Elements", difficulty: "Medium", topic: "Arrays & Hashing", status: "attempted" },
      { id: "n6", title: "Valid Palindrome", difficulty: "Easy", topic: "Two Pointers", status: "solved" },
      { id: "n7", title: "Best Time to Buy Stock", difficulty: "Easy", topic: "Sliding Window", status: "solved" },
      { id: "n8", title: "Longest Palindromic Substring", difficulty: "Medium", topic: "Sliding Window", status: "unsolved" },
    ]
  }
];

export const notes: Note[] = [
  {
    id: "note1",
    problemId: "1",
    problemTitle: "Two Sum",
    content: "## Key Insight\nUse HashMap for O(n) solution.\n\n**Approach:**\n- For each num, check if `target - num` exists in map\n- Store {num: index} in map\n\n```js\nconst map = new Map();\nfor (let i = 0; i < nums.length; i++) {\n  const comp = target - nums[i];\n  if (map.has(comp)) return [map.get(comp), i];\n  map.set(nums[i], i);\n}\n```\n\n**Remember:** Brute force is O(n²), HashMaps make it O(n)!",
    createdAt: "2026-04-01",
    updatedAt: "2026-04-05",
    tags: ["hash-table", "easy", "interview-favorite"]
  },
  {
    id: "note2",
    problemId: "5",
    problemTitle: "Maximum Subarray",
    content: "## Kadane's Algorithm\n\n**Core idea:** At each position, decide: extend previous subarray OR start new one.\n\n```\ncurr = max(nums[i], curr + nums[i])\nmax = max(max, curr)\n```\n\n**Key:** If `curr` becomes negative, starting fresh is better!\n\n**Edge case:** All negative? Return max single element.",
    createdAt: "2026-03-28",
    updatedAt: "2026-04-02",
    tags: ["dp", "kadane", "medium"]
  },
  {
    id: "note3",
    problemId: "4",
    problemTitle: "Valid Parentheses",
    content: "## Stack Based Approach\n\nPush opening brackets, for closing bracket - pop and check if it matches.\n\n**Map trick:**\n```js\nconst map = { ')': '(', '}': '{', ']': '[' };\n```\n\nIf char is a closing bracket (exists in map), pop from stack and compare.",
    createdAt: "2026-04-03",
    updatedAt: "2026-04-03",
    tags: ["stack", "easy"]
  }
];

export const playlists: Playlist[] = [
  {
    id: "p1",
    title: "Striver's A2Z DSA Course",
    channel: "take U forward",
    topic: "DSA Complete",
    videoCount: 455,
    rating: 4.9,
    url: "https://youtube.com",
    isHidden: false,
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400",
    description: "Complete DSA course from scratch to advanced. Best resource for Indian students."
  },
  {
    id: "p2",
    title: "NeetCode 150 Solutions",
    channel: "NeetCode",
    topic: "LeetCode Patterns",
    videoCount: 150,
    rating: 4.8,
    url: "https://youtube.com",
    isHidden: false,
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400",
    description: "Clear explanations with visual animations for top 150 problems."
  },
  {
    id: "p3",
    title: "Graph Algorithms Deep Dive",
    channel: "William Fiset",
    topic: "Graphs",
    videoCount: 48,
    rating: 4.9,
    url: "https://youtube.com",
    isHidden: true,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    description: "Hidden gem! Best graph algorithms explanations on YouTube. Very underrated channel."
  },
  {
    id: "p4",
    title: "Dynamic Programming Masterclass",
    channel: "Errichto",
    topic: "Dynamic Programming",
    videoCount: 32,
    rating: 4.7,
    url: "https://youtube.com",
    isHidden: true,
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400",
    description: "CP level DP explanations. Transform your DP skills completely."
  },
  {
    id: "p5",
    title: "System Design Interview",
    channel: "ByteByteGo",
    topic: "System Design",
    videoCount: 89,
    rating: 4.8,
    url: "https://youtube.com",
    isHidden: false,
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
    description: "Industry standard system design content by Alex Xu (author of System Design Interview book)."
  },
  {
    id: "p6",
    title: "React Full Course 2024",
    channel: "Dave Gray",
    topic: "Web Dev",
    videoCount: 24,
    rating: 4.6,
    url: "https://youtube.com",
    isHidden: true,
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400",
    description: "Extremely clear React course covering hooks, context, and React 18 features."
  }
];

export const topicStrengths = [
  { topic: "Arrays", strength: 82, problems: 45, correct: 37 },
  { topic: "Linked List", strength: 68, problems: 22, correct: 15 },
  { topic: "Trees", strength: 45, problems: 30, correct: 14 },
  { topic: "Graphs", strength: 30, problems: 25, correct: 8 },
  { topic: "DP", strength: 38, problems: 40, correct: 15 },
  { topic: "Binary Search", strength: 75, problems: 18, correct: 14 },
  { topic: "Recursion", strength: 60, problems: 28, correct: 17 },
  { topic: "Backtracking", strength: 25, problems: 12, correct: 3 },
  { topic: "Greedy", strength: 55, problems: 15, correct: 8 },
  { topic: "Stack/Queue", strength: 88, problems: 20, correct: 18 },
  { topic: "Heap", strength: 42, problems: 14, correct: 6 },
  { topic: "Strings", strength: 70, problems: 30, correct: 21 },
];

export const roadmap = [
  { day: 1, topic: "Arrays - Basics", problems: ["Two Sum", "Find Duplicates", "Sort Colors"], completed: true, difficulty: "Easy" },
  { day: 2, topic: "Arrays - Medium", problems: ["3Sum", "Rotate Matrix", "Next Permutation"], completed: true, difficulty: "Medium" },
  { day: 3, topic: "Strings", problems: ["Valid Palindrome", "Longest Common Prefix", "Anagram Check"], completed: true, difficulty: "Easy" },
  { day: 4, topic: "Linked List - Basics", problems: ["Reverse LL", "Detect Cycle", "Middle of LL"], completed: true, difficulty: "Easy" },
  { day: 5, topic: "Linked List - Medium", problems: ["Merge k Sorted Lists", "Remove Nth Node", "LRU Cache"], completed: false, difficulty: "Medium" },
  { day: 6, topic: "Stack & Queue", problems: ["Valid Parentheses", "Min Stack", "Implement Queue using Stacks"], completed: false, difficulty: "Easy" },
  { day: 7, topic: "Binary Search", problems: ["Classic Binary Search", "Search Rotated Array", "Find Peak Element"], completed: false, difficulty: "Medium" },
  { day: 8, topic: "Recursion & Backtracking", problems: ["Subsets", "Permutations", "N-Queens"], completed: false, difficulty: "Hard" },
  { day: 9, topic: "Trees - Traversal", problems: ["Inorder", "Level Order", "Zigzag Traversal"], completed: false, difficulty: "Easy" },
  { day: 10, topic: "Trees - Medium", problems: ["LCA", "Max Depth", "Symmetric Tree"], completed: false, difficulty: "Medium" },
  { day: 11, topic: "BST", problems: ["Validate BST", "Kth Smallest", "Insert/Delete in BST"], completed: false, difficulty: "Medium" },
  { day: 12, topic: "Heaps & Priority Queue", problems: ["Kth Largest", "Merge K Lists", "Find Median Stream"], completed: false, difficulty: "Hard" },
  { day: 13, topic: "Graphs - BFS/DFS", problems: ["BFS Traversal", "Number of Islands", "Clone Graph"], completed: false, difficulty: "Medium" },
  { day: 14, topic: "Graphs - Advanced", problems: ["Topological Sort", "Dijkstra", "Detect Cycle"], completed: false, difficulty: "Hard" },
  { day: 15, topic: "Dynamic Programming - 1D", problems: ["Climbing Stairs", "House Robber", "Coin Change"], completed: false, difficulty: "Medium" },
];

export const dailyChallenge = {
  id: "daily-1",
  title: "Longest Palindromic Substring",
  difficulty: "Medium" as Difficulty,
  domain: "DSA" as Domain,
  tags: ["String", "DP", "Expand Around Center"],
  description: "Given a string s, return the longest palindromic substring in s.",
  examples: [
    { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also a valid answer.' }
  ],
  constraints: ["1 <= s.length <= 1000", "s consist of only digits and English letters."],
  timeLimit: 1500, // 25 minutes in seconds
  streak: 7,
  totalSolved: 142
};

export const mockInterviewQuestions = [
  {
    id: "mi1",
    title: "Two Sum",
    difficulty: "Easy" as Difficulty,
    timeLimit: 600,
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]" }],
    constraints: ["O(n) time complexity required"],
    starterCode: `function twoSum(nums: number[], target: number): number[] {\n    // Your code here\n};`,
    followUp: ["What if duplicates exist?", "What if you had to return all pairs?", "How would you scale this to 1 billion numbers?"]
  },
  {
    id: "mi2",
    title: "Design LRU Cache",
    difficulty: "Medium" as Difficulty,
    timeLimit: 1800,
    description: "Design a data structure that follows LRU (Least Recently Used) cache constraints.",
    examples: [{ input: "LRUCache(2) → put(1,1) → put(2,2) → get(1) → put(3,3) → get(2)", output: "[1,-1]" }],
    constraints: ["All operations in O(1)", "Capacity given at initialization"],
    starterCode: `class LRUCache {\n    constructor(capacity: number) {}\n    get(key: number): number { return 0; }\n    put(key: number, value: number): void {}\n}`,
    followUp: ["How is this different from LFU Cache?", "Where is LRU Cache used in real systems?"]
  },
  {
    id: "mi3",
    title: "Word Break",
    difficulty: "Medium" as Difficulty,
    timeLimit: 1800,
    description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into space-separated sequence of one or more dictionary words.",
    examples: [{ input: 's = "leetcode", wordDict = ["leet","code"]', output: "true" }],
    constraints: ["1 <= s.length <= 300"],
    starterCode: `function wordBreak(s: string, wordDict: string[]): boolean {\n    // DP approach\n};`,
    followUp: ["Return all valid segmentations?", "What's the time complexity?"]
  }
];

export const eli5Concepts: Record<string, { simple: string; analogy: string; example: string }> = {
  "recursion": {
    simple: "A function that calls itself to solve smaller versions of the same problem.",
    analogy: "Imagine you're in a room of mirrors - each mirror reflects all the other mirrors, getting smaller and smaller until you can barely see them.",
    example: "Finding factorial of 5: 5 × (factorial of 4) × (factorial of 3)... until you reach 1!"
  },
  "binary search": {
    simple: "Finding something in a sorted list by always checking the middle and eliminating half.",
    analogy: "Like guessing a number 1-100. If I say 'too low/high', you always pick the middle of remaining numbers. Much faster than guessing 1, 2, 3...",
    example: "Dictionary search! You open the middle, see it's past 'M', so you only look in the second half."
  },
  "dynamic programming": {
    simple: "Solving complex problems by breaking into subproblems and storing results so you don't recalculate.",
    analogy: "Imagine calculating your commute time. Instead of recalculating every day, you write it down. Next time, just look at your notes!",
    example: "Fibonacci: Instead of calculating fib(100) from scratch every time, store fib(1)=1, fib(2)=1, fib(3)=2... and build up."
  },
  "graph": {
    simple: "A collection of nodes (points) connected by edges (lines), representing relationships.",
    analogy: "Your friend circle! You are a node, your friends are nodes, and the friendships are edges connecting you all.",
    example: "Google Maps is a graph! Cities = nodes, Roads = edges, Distances = weights."
  }
};

export const userStats = {
  name: "Arjun Sharma",
  avatar: "AS",
  level: "Intermediate",
  streak: 7,
  totalSolved: 87,
  easy: 45,
  medium: 35,
  hard: 7,
  rank: 12458,
  xp: 4250,
  nextLevelXp: 5000,
  joinDate: "January 2026",
  lastActive: "Today"
};

export const revisionProblems = [
  { id: "1", title: "Two Sum", difficulty: "Easy" as Difficulty, lastSolved: "7 days ago", dueForRevision: true, timesReviewed: 2 },
  { id: "4", title: "Valid Parentheses", difficulty: "Easy" as Difficulty, lastSolved: "14 days ago", dueForRevision: true, timesReviewed: 1 },
  { id: "5", title: "Maximum Subarray", difficulty: "Medium" as Difficulty, lastSolved: "5 days ago", dueForRevision: false, timesReviewed: 3 },
  { id: "12", title: "Binary Search", difficulty: "Easy" as Difficulty, lastSolved: "21 days ago", dueForRevision: true, timesReviewed: 1 },
  { id: "2", title: "Longest Substring", difficulty: "Medium" as Difficulty, lastSolved: "3 days ago", dueForRevision: false, timesReviewed: 2 },
  { id: "13", title: "Climbing Stairs", difficulty: "Easy" as Difficulty, lastSolved: "10 days ago", dueForRevision: true, timesReviewed: 2 },
];
