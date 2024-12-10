In React Router Dom v6, if you are using the `useParams` hook inside a component that is not directly a child of a route, you might encounter unexpected behavior.  The `params` object might be undefined or contain stale data. This happens because `useParams` only works correctly within route components. If the component is nested too deeply or rendered conditionally, it might not receive updates when the URL changes.

For example:

```javascript
// Incorrect usage
function MyComponent() {
  const params = useParams();
  console.log(params); // might be undefined or stale
  return <div>...</div>;
}

function ParentComponent() {
  return (
    <Routes>
      <Route path="/users/:id" element={<User/>}>
      </Route>
    </Routes>
  );
}

function User() {
  return <MyComponent/>
}
```

In this case, `MyComponent` is not a direct child of a route, leading to the problem. 