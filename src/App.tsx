import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import ReactMarkdown from 'react-markdown';
import { Card, CardContent } from "@/components/ui/card"
import remarkGfm from 'remark-gfm';


function App() {

  // const markdown = "I'll explain the Climbing Stairs problem using dynamic programming, which is a great introductory problem to understand the core concepts of DP.\n\nProblem Statement:\n- You are climbing a staircase\n- You can climb 1 or 2 steps at a time\n- How many distinct ways can you climb to the top?\n\nHere's a step-by-step explanation:\n\n1. Basic Recursive Approach (Inefficient):\n```python\ndef climbStairs(n):\n    # Base cases\n    if n <= 2:\n        return n\n    \n    # Recursive solution\n    return climbStairs(n-1) + climbStairs(n-2)\n```\n- Time Complexity: O(2^n)\n- Space Complexity: O(n) recursive call stack\n- Problem: Exponential time complexity, many redundant calculations\n\n2. Memoization Approach (Top-Down DP):\n```python\ndef climbStairs(n):\n    # Memoization to store already computed results\n    memo = {}\n    \n    def dp(n):\n        # Base cases\n        if n <= 2:\n            return n\n        \n        # Check if already computed\n        if n in memo:\n            return memo[n]\n        \n        # Compute and store result\n        memo[n] = dp(n-1) + dp(n-2)\n        return memo[n]\n    \n    return dp(n)\n```\n- Time Complexity: O(n)\n- Space Complexity: O(n)\n- Improvement: Stores computed results to avoid redundant calculations\n\n3. Tabulation Approach (Bottom-Up DP):\n```python\ndef climbStairs(n):\n    # Handle base cases\n    if n <= 2:\n        return n\n    \n    # DP table\n    dp = [0] * (n + 1)\n    \n    # Initialize base cases\n    dp[1] = 1  # 1 way to climb 1 stair\n    dp[2] = 2  # 2 ways to climb 2 stairs\n    \n    # Build solution bottom-up\n    for i in range(3, n + 1):\n        dp[i] = dp[i-1] + dp[i-2]\n    \n    return dp[n]\n```\n- Time Complexity: O(n)\n- Space Complexity: O(n)\n- Most optimal standard DP solution\n\n4. Space-Optimized Solution:\n```python\ndef climbStairs(n):\n    # Handle base cases\n    if n <= 2:\n        return n\n    \n    # Only need to track last two values\n    prev1 = 2  # Ways to climb 2 stairs\n    prev2 = 1  # Ways to climb 1 stair\n    \n    # Iterate and compute\n    for _ in range(3, n + 1):\n        current = prev1 + prev2\n        prev2 = prev1\n        prev1 = current\n    \n    return prev1\n```\n- Time Complexity: O(n)\n- Space Complexity: O(1)\n- Most memory-efficient solution\n\nKey Dynamic Programming Concepts Demonstrated:\n1. Overlapping Subproblems\n2. Optimal Substructure\n3. Memoization vs Tabulation\n4. Bottom-up approach\n5. Space optimization\n\nExample Walkthrough:\n- For n = 4 stairs\n- Ways to climb: \n  1. 1+1+1+1\n  2. 1+1+2\n  3. 1+2+1\n  4. 2+1+1\n  5. 2+2\n\nVisualization of DP Table for n = 4:\n```\nStairs | Ways to Climb\n1      | 1\n2      | 2\n3      | 3 (1+2)\n4      | 5 (3+2)\n```\n\nCommon Variations:\n- Climbing with variable step sizes\n- Minimum cost climbing stairs\n- Constraints on step climbing\n\nPractice Problems:\n1. Coin Change\n2. House Robber\n3. Unique Paths\n\n # Tips for Solving DP Problems:\n\n1. Identify overlapping subproblems"
  const smaller_markdown = "Ways to climb: \n  1. 1+1+1+1\n  2. 1+1+2\n  3. 1+2+1\n  4. 2+1+1\n  5. 2+2\n\nVisualization of DP Table for n = 4:\n```\nStairs | Ways to Climb\n1      | 1\n2      | 2\n3      | 3 (1+2)\n4      | 5 (3+2)\n```\n\nCommon Variations:\n- Climbing with variable step sizes\n- Minimum cost climbing stairs\n- Constraints on step climbing\n\nPractice Problems:\n 1. Coin Change\n2. House Robber\n3. Unique Paths\n\nTips for Solving DP Problems:\n1. Identify overlapping subproblems"
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle></ModeToggle>
      <Card>
        <CardContent>
          <div style={{ whiteSpace: 'pre' }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {smaller_markdown}
            </ReactMarkdown>
          </div>
        </CardContent>
      </Card>

      <div className="prose dark:prose-invert" style={{ whiteSpace: 'pre' }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {smaller_markdown}
        </ReactMarkdown>
      </div>
    </ThemeProvider>
  )
}

export default App
