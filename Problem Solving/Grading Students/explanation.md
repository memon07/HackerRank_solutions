We have an array of grades , We need to round of the number if its closer to any multiple of 5 <br/>
i.e. 5, 10, 20, 25 etc 
<br/> Only if the number is greater than 38


We will run a loop via map() function on grades array.

```javascript
diff = 5 - (n % 5)
```

Create difference by subtracting 5 with the array's element remmainder when we divide it by 5

```javascript
if (diff < 3 && n >= 38) {
            n += diff;
}
return n
```

check if diff is less then 3 and array's element is greater than or equal to 38<br/>
if yes add the diff and return the element


