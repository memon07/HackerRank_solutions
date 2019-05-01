Solution requires groups of positive , negative and numbers that are zeros.

Here we create 3 variable for each conditions
```javascript
var zero = 0;
var positive = 0;
var negative = 0;
```
we need to find the occurance of +ve,-ve and 0's in the provided array 

```
arr = [1,1,0,-1,-1]
```
```javascript
arr.map(a => {
        if (a < 0) return  negative = negative + 1 ;
        if (a == 0) return  zero = zero + 1 ;
        if (a > 0) return positive = positive + 1;

})
```
Now we check the length of array to display the ratio of each 

```javascript
var l = arr.length;

console.log(positive / l)
console.log(negative / l)
console.log(zero / l)
```
