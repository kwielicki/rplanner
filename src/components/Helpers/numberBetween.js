import { isNumber } from 'lodash'

export const numberBetween = (min, max) => {
    return (props, propName, componentName) => {
        const prop = props[propName];
        if(!isNumber(prop) || prop < min || prop > max) {
            return new Error(
                    `Prop ${propName} must be a number between ${min} and ${max} on ${componentName} component. Actually is '${prop}' as ${typeof prop}.
                `);
        }
    }
}