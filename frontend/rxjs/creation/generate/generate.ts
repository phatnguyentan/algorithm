// RxJS v6+
import { generate } from 'rxjs';

generate(
  2,
  x => x <= 8,
  x => x + 3
).subscribe(console.log);
