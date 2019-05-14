From the given array eg = [4,4,1,3] we have to print the total number of occurence of the highest number
<br/>here it is 4.<br/>
4 is been seen twice in the array therefore we print 2.

```javascript
let max = Math.max(...ar);
```

here we pass array as in javascript in build function max to find the largest number

### note
Do read the difference between spreading and destructuring

```javascript
let x = ar.filter(a => a == max)
return x.length
```

Next, we use filter method and compare the max element with all the elements inside the array.
<br/>Filter will now output us with [4,4]
<br/>hence we return the length of the new array we got.
