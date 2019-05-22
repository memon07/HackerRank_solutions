We get an input eg s = '07:05:45PM'<br/>

So we are going to select only numerical values and split them its 3 parts.

```javascript
const arr = s.slice(0, 8).split(':');
```

Now , we check if array contains PM or not if yes we apply the following ternary operations<br/>

```javascript
arr[0] = (s.indexOf('PM') > -1) ?
```
We check if arr[0] contains 12 if no we add 12 

```javascript
(arr[0] == 12) ? arr[0] = '12' : Number(arr[0]) + 12 :
```


 
