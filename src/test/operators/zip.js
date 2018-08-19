 const { of, zip } = require('rxjs')

const age$ = of(27, 25, 29)
const name$ = of('Foo', 'Bar', 'Beer')
const isDev$ = of(true, true, false)

zip(age$,
    name$,
    isDev$,
    (age, name, isDev) => ({ age, name, isDev }))
.subscribe(x => console.log(x))

// 输出：
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }