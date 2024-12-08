# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook. The bug causes an infinite loop due to incorrect state updates within the `useEffect` function. 

## Bug Description

The `MyComponent` attempts to increment the `count` state variable within its `useEffect` hook. The problem is that the updated value of `count` depends on the previous value of `count`, leading to continuous updates, and causing the browser to freeze. 

## Solution

The solution corrects this by using functional update to the `setCount` state function: The `setCount` function should be called with a function that takes the current state value as an argument and returns the new state value. This ensures that the component uses the correct value when performing the update. 