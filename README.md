# blipDOM, an ultra-lightweight reactive JavaScript library

This is a lightweight JavaScript library for reactivity, state management, and DOM rendering. It’s designed to be simple and easy to understand.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Example Usage](#example-usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install via npm:

```bash
npm install blipdom
```

## Features

- **Reactivity**: Automatically updates the DOM when state changes.
- **Stateful**: Allows for reactive state management using proxies.
- **DOM Rendering**: Renders only the necessary DOM elements.

## Usage

Here's a basic usage example to get you started:

```javascript
import { createReactiveState, render } from "my-framework";

// Define an initial reactive state
const state = createReactiveState({ count: 0 });

// Define a template function for rendering the state
const template = (state) => `<div>Count: ${state.count}</div>`;

// Render the template with the current state to an HTML element
render(document.getElementById("app"), template, state);
```

In this example:

1. `createReactiveState` initializes a reactive state.
2. `render` binds the state to an HTML element, updating the DOM whenever the state changes.

## API Documentation

### `createReactiveState(initialState)`

Creates a reactive state object. Changes to this object will automatically trigger updates in any components or DOM elements using this state.

- **Parameters**:

  - `initialState` _(Object)_: An object containing initial state properties.

- **Returns**: A reactive version of `initialState`.

- **Example**:

  ```javascript
  const state = createReactiveState({ count: 0 });
  state.count = 1; // This will automatically trigger an update in the UI.
  ```

### `render(targetElement, templateFunction, state)`

Renders a DOM element based on the provided state and template function. Automatically re-renders when the state changes.

- **Parameters**:

  - `targetElement` _(HTMLElement)_: The HTML element to render into.
  - `templateFunction` _(Function)_: A function that takes `state` as a parameter and returns an HTML string.
  - `state` _(Object)_: The reactive state object to be rendered.

- **Example**:

  ```javascript
  render(document.getElementById("app"), template, state);
  ```

## Example Usage

See `examples/example.html` for a sample setup.

## Contributing

Contributions are welcome! To get started:

1. Fork this repository.
2. Create a new branch for your feature (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

Please follow the [code of conduct](CODE_OF_CONDUCT.md) and include tests where applicable.

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
