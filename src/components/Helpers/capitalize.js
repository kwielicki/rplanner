import throwError from './throwError'
import __dev__ from 'Utils/__dev__/__dev__';

export default function capitalize(string) {
    if (__dev__) {
        if (typeof string !== 'string') {
          return throwError(`capitalize(string) expects a string argument, but received ${typeof string}(${string}).`)
        }
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}
