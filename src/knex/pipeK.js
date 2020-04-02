import { pipe } from 'ramda'
import { pipeP } from 'wink-fp'

export let pipeK = (...ks) => (...fs) => pipeP(pipe(...ks), ...fs)
