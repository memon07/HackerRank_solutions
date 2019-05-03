This is one of the most famous problem.printing of patterns
Basically it is achieved by using multiple loops. But i will solve using a different approach

```javascript
    for (var i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i));
    }
```
