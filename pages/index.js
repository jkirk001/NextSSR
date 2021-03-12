import { fetchData } from "../utils/fetchData";
import { preRenderJson } from "../utils/fetchDataDB";
import Link from "next/link";

function HomePage(props) {
  const items = props.products.map((item, index) => {
    return (
      <li key={item._id}>
        <h3>
          <Link href={`/${item._id}`}>
            <a>{item.username}</a>
          </Link>
        </h3>
        <p>{item.salt}</p>
      </li>
    );
  });
  return <ul>{items}</ul>;
}
export async function getStaticProps() {
  try {
    const data = await fetchData();
    return {
      props: {
        products: data.data,
      },
      revalidate: 10,
      notFound: false,
    };
  } catch {
    const data = await preRenderJson();
    const dataFinal = await JSON.parse(data);
    return {
      props: {
        products: dataFinal,
      },
      revalidate: 10,
      notFound: false,
    };
  }
}

export default HomePage;
