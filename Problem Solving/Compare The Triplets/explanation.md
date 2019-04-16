Here we have two arrays 'a' and 'b'<br/>
for this challenge we need to compare both the arrays with their exact index location<br/>
i.e a[1] needs to be compared with b[1] and so on ....

As we already have both the arrays and their location , we use ternary operator to compare the elements and add a point to the winner.

```javascript
    var alicePoints = ((a[0] > b[0] ? 1 : 0) + ((a[1] > b[1]) ? 1 : 0) + ((a[2] > b[2]) ? 1 : 0))
    var bobPoints = ((a[0] < b[0]) ? 1 : 0) + ((a[1] < b[1]) ? 1 : 0) + ((a[2] < b[2]) ? 1 : 0) 
```

### Note 
To know more about ternary operator visit [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
