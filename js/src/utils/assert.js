export function assert(condition, message) {
    if (!condition) {
        console.error(message);
        throw new Error(message);
    }
}