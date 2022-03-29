import { GetStaticProps, InferGetStaticPropsType } from "next";

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(products);

  return (
    <div>
      <h1>Hello world</h1>
      <h2>{products.name}</h2>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const products = { name: "ball", price: 200 };

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
};
