import { useState } from "react";
import type { InferGetServerSidePropsType } from "next";
import { TopPage } from "@/components/TopPage/TopPage";
import { getData } from "./getDate";

type Data = { id: string; name: string; username: string }[];

const apiUlr = "https://jsonplaceholder.typicode.com/users/";

export const getServerSideProps = getData(apiUlr);

export default function TopPageContainer({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isShow, setIsShow] = useState(false);
  const toggleIsShow = () => {
    setIsShow(!isShow);
  };
  return <TopPage {...{ isShow, toggleIsShow, data }} />;
}
