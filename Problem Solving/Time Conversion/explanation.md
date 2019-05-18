We get an input eg s = '07:05:45PM'<br/>

So we are going to select only numerical values and split them its 3 parts.

```javascript
const arr = s.slice(0, 8).split(':');
```
