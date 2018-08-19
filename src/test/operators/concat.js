const { of } = require('rxjs')
const { concat } = require('rxjs/operators')

const ob$1 = of(1, 2, 3)
const ob$2 = of(4, 5, 6)

ob$1.pipe(
  concat(ob$2)
).subscribe(v => console.log(v))

// 1, 2, 3, 4, 5, 6