export function createReactiveState(initialState) {
  const listeners = new Set();

  const state = new Proxy(initialState, {
    get(target, prop) {
      return target[prop];
    },
    set(target, prop, value) {
      target[prop] = value;
      listeners.forEach((listener) => listener());
      return true;
    },
  });

  state.subscribe = (listener) => listeners.add(listener);
  state.unsubscribe = (listener) => listeners.delete(listener);

  return state;
}
