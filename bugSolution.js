The best solution is to restructure your components so that components using useParams are direct children of the relevant route. 

```javascript
// Correct usage
function User() {
  const params = useParams();
  return (
    <div>
      <h1>User ID: {params.id}</h1>
    </div>
  );
}

function ParentComponent() {
  return (
    <Routes>
      <Route path="/users/:id" element={<User/>}>
      </Route>
    </Routes>
  );
}
```

If restructuring is not possible, use the `useLocation` hook and parse the URL manually. This is generally less efficient.

```javascript
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userId = params.get('id');
  return (
    <div>
        <h1>User ID (from query): {userId}</h1>
    </div>
  );
}
```
This requires you to use query parameters instead of path parameters.