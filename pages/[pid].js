import { Fragment } from "react";
import { fetchData } from "../utils/fetchData";
import { preRenderJson } from "../utils/fetchDataDB";

const PersonDetailPage = (props) => {
  console.log(props);
  return (
    <Fragment>
      <h1> {props.product[0].username}</h1>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  try {
    const { params } = context;
    const id = params.pid;

    const data = await fetchData();

    const result = data.data.filter((item, index) => {
      return item._id === id;
    });

    return {
      props: {
        product: result,
      },
      revalidate: 10,
      notFound: false,
    };
  } catch {
    const { params } = context;
    const id = params.pid;

    const data = await preRenderJson();
    const dataFinal = await JSON.parse(data);

    const result = dataFinal.filter((item, index) => {
      return String(item._id) === String(id);
    });
    return {
      props: {
        product: result,
      },
      revalidate: 10,
      notFound: false,
    };
  }
}

export async function getStaticPaths() {
  try {
    const data = await fetchData();

    const dynamicPaths = data.data.map((item, index) => {
      return { params: { pid: item._id } };
    });
    return {
      paths: dynamicPaths,
      fallback: false,
    };
  } catch {
    const data = await preRenderJson();
    const dataFinal = await JSON.parse(data);

    const dynamicPaths = dataFinal.map((item, index) => {
      return { params: { pid: String(item._id) } };
    });
    return {
      paths: dynamicPaths,
      fallback: false,
    };
  }
}
export default PersonDetailPage;
