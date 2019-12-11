export const convertUtcDate = (date) => {
    const getDate = new Date(date)
    const getDateMultiplier = getDate * 1000
    return getDateMultiplier
}