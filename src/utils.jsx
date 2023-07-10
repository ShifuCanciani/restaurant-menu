export function addErrorIntoField(errors) {
    return errors ? { error: true } : { error: null };
}