function HomePage(props) {
  const items = props.products.data.map((item, index) => {
    return (
      <li key={item._id}>
        <h3>{item.username}</h3>
        <p>{item.salt}</p>
      </li>
    );
  });
  return <ul>{items}</ul>;
}
export async function getStaticProps() {
  const results = await fetch("http://localhost:3000/api/test");
  const data = await results.json();
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}

export default HomePage;
