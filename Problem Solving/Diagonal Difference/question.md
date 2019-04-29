Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr  is shown below:

```
1 2 3
4 5 6
9 8 9  
```

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is | 17 -15 | = 2.

### Function description

Complete the diagonalDifference function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

* arr: an array of integers .

### Input Format

The first line contains a single integer, , the number of rows and columns in the matrix . 
Each of the next  lines describes a row, , and consists of  space-separated integers .

### Constraints

* -100 <= arr[i][j] <= 100

### Output Format

Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

### Sample Input

```
3
11 2 4
4 5 6
10 8 -12
```

### Sample Output

```
15
```