import Image from "next/image";
import styled from "styled-components";
import axios from "axios";
import {
  GetServerSideProps,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import sample from "../public/images/sample.jpg";
import sample2 from "../public/images/sample2.jpg";

export const getStaticProps: GetStaticProps = async () => {
  const products = [1, 2, 3];

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
};

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(products);

  return <div>Hello world</div>;
};

export default Home;
