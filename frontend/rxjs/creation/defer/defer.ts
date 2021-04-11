// RxJS v6+
import { defer, of, timer, merge } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const s1 = of(new Date()); //will capture current date time
const s2 = defer(() => of(new Date())); //will capture date time at the moment of subscription

console.log(new Date());

timer(2000)
  .pipe(switchMap(_ => merge(s1, s2)))
  .subscribe(console.log);