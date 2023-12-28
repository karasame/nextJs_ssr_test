"use client";

import { useEffect, useState } from "react";
import { TopPage } from "./TopPage";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const TopPageContainer = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isShow, setIsShow] = useState(false);
  const toggleIsShow = () => {
    setIsShow(!isShow);
  };
  console.log(data);
  return <TopPage {...{ isShow, toggleIsShow, json: data }} />;
};

type Data = { id: string; name: string; username: string }[];

const dummy: Data = [{ id: "没收到", name: "没收到", username: "没收到" }];
export const getServerSideProps = (async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data: Data = await res.json();
  return { props: { data } };
}) satisfies GetServerSideProps<{ data: Data }>;
