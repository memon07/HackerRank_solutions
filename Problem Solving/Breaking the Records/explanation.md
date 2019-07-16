Here we declare two variables min and max.<br/>
using for loop we check each element of array , if its greater or less than intialized variable and as per the outcome we are pushing the variables in two differend arrays maxArray and minArray <br/>

```javascript
if (scores[i] > max) {
    max = scores[i];
    maxArray.push(max)
}
```

```javascript
if (scores[i] < min) {
    min = scores[i]
    minArray.push(min)
}
```

Now , we are returning both array's lengths
```javascript
return [maxArray.length,minArray.length]
``` 