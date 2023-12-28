import { useEffect, useState } from "react";
import { Modal } from "./Modal";

type Props = { isShow: boolean; toggleIsShow: () => void };

export const ModalContainer: React.FC<Props> = ({ isShow, toggleIsShow }) => {
  const [json, setJson] = useState<{ url?: string }>({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/1")
      .then((response) => response.json())
      .then((json) => setJson(json));
  }, []);
  console.log(json);
  return <Modal {...{ isShow, json, toggleIsShow }} />;
};
