import throwError from './throwError'

export default function capitalize(string) {
    if (process.env.NODE_ENV !== 'production') {
        if (typeof string !== 'string') {
          return throwError(`capitalize(string) expects a string argument, but received ${typeof string}(${string}).`)
        }
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}
