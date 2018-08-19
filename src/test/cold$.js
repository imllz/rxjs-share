const { interval } = require('rxjs')
const { take } = require('rxjs/operators')

const tick$ = interval(1000).pipe(
  take(3)
)

tick$.subscribe(v => console.log(`observable 1: ${v}`))

setTimeout(() => {
  tick$.subscribe(v => console.log(`observable 2: ${v}`))
}, 2000)

// observable 1: 0
// observable 1: 1
// observable 2: 0
// observable 1: 2
// observable 2: 1
// observable 2: 2