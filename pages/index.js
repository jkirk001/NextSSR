function HomePage(props) {
  const items = props.products.map((item, index) => {
    return (
      <li key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </li>
    );
  });
  return <ul>{items}</ul>;
}
export async function getStaticProps() {
  const results = await fetch("http://localhost:3000/api/data");
  const data = await results.json();
  return {
    props: {
      products: data,
    },
  };
}

export default HomePage;
