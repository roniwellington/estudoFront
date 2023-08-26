import {log, timeoutPromise, retry } from "./utils/promise-helpers.js";
import './utils/array-helpers.js';
import { notasService as service } from "./nota/service.js";
import { debounceTime, takeUntil, partialize, pipe } from "./utils/operators.js";
import {EventEmitter } from "./utils/event-emitter.js";
import { Maybe } from "./utils/maybe.js";

const value = Maybe.of(null)
.map(value => value + 10)
.map(value => value + 30)
.getOrElse(0);
alert(value);

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
)


const action = operations(() =>
    retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143')))
        .then(total => EventEmitter.emit('itensTotalizados', total))
        .catch(console.log)

);

document
    .querySelector('#myButton')
    .onclick = action;

EventEmitter.on('itensTotalizados', console.log);

EventEmitter.on('itensTotalizados', total => alert(total));
