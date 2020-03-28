export default function throwError(error, prefix = 'R-PLANNER') {
    throw new Error(`${prefix} - ${error}`)
}