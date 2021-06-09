import fetch from 'isomorphic-unfetch';

export default function Async({ data }) {
  return (
    <>
      <h1>sunt</h1>
      <div>
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
