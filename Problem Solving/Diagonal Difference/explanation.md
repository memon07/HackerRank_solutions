The problem has been solved by two approaches

solution (a):
It uses two loops, 1st loop to get the count of one diagonal a[0][0] - c[3][3]
```javascript
for (var i = 0, j = n - 1; i < n; i++ , j--) 
ld += arr[i][i]
```
```
 n = 3
 arr = | 1 2 3 |
       | 4 5 6 |
       | 9 8 9 |
```
This results in 

| i   | i < n  | i++  | arr[i][i] | result |
| -------- |:--------:| :-----:| :------:| ----:|
| 0   | true | 1 | arr[0][0] | 1 |
| 1   | true | 2 | arr[1][1] | 5 |
| 2   | true | 3 | arr[2][2] | 9 |
| 3   | false | | | |

therefore ld = 1 + 5 + 9 = 15

similarly ,
```javascript
for (var i = 0, j = n - 1; i < n; i++ , j--) 
rd += arr[i][j]
```
| j = n - 1 | i = 0  | i < n  | i++ | j--  | arr[i][j] | result |
| -----| --- |:--------:|:-----:|:------:| :----:| ----:|
| 2  | 0 | true | 1 | 1 | arr[0][2] | 3 |
| 1  | 1 | true | 2 | 0 | arr[1][1] | 5 |
| 0  | 2 | true | 3 |  | arr[2][0] | 9 |

therefore rd = 3 + 5 + 9 = 17

```javascript
return Maths.abs(rd - ld)
```
here we return the difference between them

### note

to know more about Maths abs funtion refer [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
