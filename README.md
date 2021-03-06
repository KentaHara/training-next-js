# Training Next.js

## React (v17.0.1)

### [Lifecycle API](https://ja.reactjs.org/docs/react-component.html)

#### Mount

1. `constructor()`
1. `static getDerivedStateFromProps()`
1. `render()`
1. `componentDidMount()`

#### Re-render

1. `static getDerivedStateFromProps()`
1. `shouldComponentUpdate()`
1. `render()`
1. `getSnapshotBeforeUpdate()`
1. `componentDidUpdate()`

#### Unmount

- `componentWillUnmount()`

#### Error Handling

1. `static getDerivedStateFromError()`
1. `componentDidCatch()`

### Effect Hooks

- `useEffect`
  - Mount時、または、Props, Stateが変更されたタイミング（再レンダリング）で発火
  - returnで返す関数はUnmount時に発火
- [Hookは全てをカバーしていない](https://ja.reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes)
