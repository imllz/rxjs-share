const { from, range, of, interval } = require('rxjs')
const { catchError, retry, retryWhen, map, switchMap } = require('rxjs/operators')

const range$ = range(1, 5)
const throwUnluckyNumber = v => {
  if (v === 4) throw new Error('不幸运的数字')
  return v
}
range$.pipe(
  map(throwUnluckyNumber),
  retry(2),
  catchError(e => of('新的Observable'))
).subscribe(v => console.log(v))

// 重试Promise
let times = 1
const observable$ = of(1)
const fetchPromise = function () {
  console.log(times++)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('来自Promise的错误'))
    }, 1000)
  })
}

observable$.pipe(
  switchMap(num => from(fetchPromise())),
  retry(3),
  catchError(e => of('catchError'))
).subscribe({
  next: boo => console.log(boo),
  error: e => console.log(e)
})


range$.pipe(
  map(throwUnluckyNumber),
  retryWhen(err$ => interval(1000)),
  catchError(e => of('新的Observable'))
).subscribe(v => console.log(v))