function birthday(s, d, m) {

    // s: an array of integers, the numbers on each of the squares of chocolate
   // d: an integer, Ron's birth day
  // m: an integer, Ron's birth month s[2]+s[3] = d

   let vc = [];
   for (let i = 0; i < s.length; i++) {
       let c = s.slice(i, i + m);
       if ((c.length === m) && (d === c.reduce((r, acc) => acc + r, 0))) {
           vc.push(c);
       }
   }
   return vc.length;
}
