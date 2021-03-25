export const translationText = (object, id) => {
    return object !== undefined ? String(object[id]) : '';
}
