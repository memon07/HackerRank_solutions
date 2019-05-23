function gradingStudents(grades) {
    return grades.map((n) => {
        let diff = 5 - (n % 5);
        if (diff < 3 && n >= 38) {
            n += diff;
        }

        return n;
    })
}