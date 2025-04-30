export function Secuenciator(callbacks: ((next: () => void) => HTMLElement)[]) {
    let index = 0;

    function next() {
        if (index < callbacks.length) {
            const currentFunction = callbacks[index];
            currentFunction(next);
            index++;
        }
    }
}
