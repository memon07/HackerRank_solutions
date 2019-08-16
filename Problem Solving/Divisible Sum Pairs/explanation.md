By using double loop, we are adding the pair of i and j with the condition that i < j.</br>

```javascipt
for (let i = 0; i <= n -1; i++){
        for (let j = i; j <= n - 1; j++){
            (ar[i] + ar[j + 1])
        }
    }
```

Now, we will increment our counter if the addition of the array when divided by a certain number i.e k </br>
is totally divisible.

```javascipt
if ((ar[i] + ar[j + 1]) % k === 0) {
                count++;
}
```