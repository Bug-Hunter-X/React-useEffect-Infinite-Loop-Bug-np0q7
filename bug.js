```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting count directly inside useEffect
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```