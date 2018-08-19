const { timer } = require('rxjs')
const { merge, map } = require('rxjs/operators')

const ob$1 = timer(0, 1000).pipe(
  map(v => v + 'A')
)
const ob$2 = timer(500, 1000).pipe(
  map(v => v + 'B')
)

ob$1.pipe(
  merge(ob$2)
).subscribe(v => console.log(v))

// 0A
// 0B
// 1A
// 1B
// ....