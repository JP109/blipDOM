export function render(rootElement, templateFn, state) {
  rootElement.innerHTML = templateFn(state);
}
