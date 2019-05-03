This is one of the most famous problem.printing of patterns.<br/>
Basically it is achieved by using multiple loops. But i will solve using a different approach

```javascript
for (var i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i));
}
```

sample input is n = 6 <br/>
So the loop starts with 1 and stops when it is less or equal to 6 <br/>

Inside the loop we will print " " blank space with the help of a javascript function repeat()<br/>
similarly with #


| i = 1 | ' '.repeat( n - i )  | '#'.repeat(i) | result |
| -----| :---: | :----:|----:|
| 1  | 5 | 1 |      # |
| 2  | 4 | 2 |     ## |
| 3  | 3 | 3 |    ### |
| 4  | 2 | 4 |   #### |
| 5  | 1 | 5 |  ##### |
| 6  | 0 | 6 | ###### |


### Note
to know more about repeat function refer [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
