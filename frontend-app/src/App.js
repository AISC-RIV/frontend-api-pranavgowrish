import React, { useState, useEffect } from 'react';
function App() {
const [data, setData] = useState([]);
useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => setData(data));
}, []);
return (
<div>
<h1>Posts</h1>
{data.map(post => (
<div key={post.id}>
<h2>{post.title}</h2>
<p>{post.body}</p>
</div>
))}
</div>
);
}
export default App;