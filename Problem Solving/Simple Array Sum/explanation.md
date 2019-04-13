
Array ' ar ' is passed into the function. <br /> in = [1 2 3 4 10 11] op = 31 <br />
we apply reducer function (provided default by the javascript array prototype)

```javascript
  return ar.reduce((acc,cv) => acc + cv)
```
the loop that will run does the following

| acc | cv | return value |
| --- | -- | -----------: |
| 0 | 1 | 1 |
| 1 | 2 | 3 |
| 3 | 3 | 6 |
| 6 | 4 | 10 |
| 10 | 10 | 20 |
| 20 | 11 | op = 31 |


```
  reduce() is nothing but a for loop specifically designed for arrays when we wants to return a singular value.  
```


### note
To know more about reduce function visit [Mozilla doc on reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
