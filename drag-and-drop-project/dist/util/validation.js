export function validate(validatableInput) {
    let isValid = true;
    let val = validatableInput.value;
    if (validatableInput.required) {
        isValid = isValid && !!val.toString().trim().length;
    }
    if (validatableInput.minLength != null && typeof val === "string") {
        isValid = isValid && val.length > validatableInput.minLength;
    }
    if (validatableInput.maxLength != null && typeof val === "string") {
        isValid = isValid && val.length < validatableInput.maxLength;
    }
    if (validatableInput.min != null && typeof val === "number") {
        isValid = isValid && val >= validatableInput.min;
    }
    if (validatableInput.max != null && typeof val === "number") {
        isValid = isValid && val <= validatableInput.max;
    }
    return isValid;
}
