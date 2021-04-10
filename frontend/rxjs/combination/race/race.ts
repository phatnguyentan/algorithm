// RxJS v6+
import { interval, race } from 'rxjs';
import { mapTo, take } from 'rxjs/operators';

//take the first observable to emit
const example = race(
  //emit every 1.5s
  interval(1500),
  //emit every 1s
  interval(1000).pipe(mapTo('1s won!')),
  //emit every 2s
  interval(2000),
  //emit every 2.5s
  interval(2500)
);
//output: "1s won!"..."1s won!"...etc
const subscribe = example.pipe(take(5)).subscribe(val => console.log(val));