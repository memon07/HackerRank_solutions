The question asks us to find the max sum and the min sum of the elements in an array.

We will follow a simple logical approach for solving this.

If we will find the min and the max element from the array 

```javascript
var min = Math.min(...arr);
var max = Math.max(...arr);
```

Here we use javascript's in-build functions min and max while passing the array as its arguments (destructuring method of es6)

Now we will find the total i.e. sum of the array using reduce()
```javascript
let sum = arr.reduce((prev, curr) => prev + curr);
```

display the difference between sum max and sum min 
```javascript
console.log(sum - max, sum - min);
```


### Note 
To learn more about destructuring visit [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
