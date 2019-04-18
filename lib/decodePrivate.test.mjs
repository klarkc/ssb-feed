import test from "ava"
import decodePrivate from './decodePrivate'

test.cb('ignore not encrypted msgs', (t) => {
    const data = {
        content: {}
    }
    const done = (err, d) => {
        t.is(null, err)
        t.is(data, d)
        t.end()
    }
    decodePrivate(data, done)
})