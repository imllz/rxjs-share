const { of } = require('rxjs')
const { catchError, map } = require('rxjs/operators')

const of$ = of(...[1, 2, 3])

of$.subscribe({
  next: v => {
    // if (v === 2) {
    //   throw new Error('不能等于2')
    // }
    console.log(v)
  },
  error: err => console.log(err)
})

of$.pipe(
  map(v => {
    // if (v === 2) {
    //   throw new Error('我是2')
    // }
    return v * v
  })
).subscribe({
  next: v => {
    // if (v === 2) {
    //   throw new Error('不能等于2')
    // }
    console.log(v)
  },
  error: err => console.log('err:', err)
})

// var promise = new Promise((resolve, reject) => {
//   resolve(12)
// })
// promise.then(() => {
//   throw Error('my error');
// }).catch(err => console.log('promise err:', err))