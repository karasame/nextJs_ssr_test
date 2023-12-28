import { ModalContainer } from "./Modal/modal.container";

type Props = {
  isShow: boolean;
  json: Data;
  toggleIsShow: () => void;
};

type Data = { id: string; name: string; username: string }[];

export const TopPage: React.FC<Props> = ({ isShow, json, toggleIsShow }) => (
  <main>
    <button onClick={toggleIsShow}>12345</button>
    {isShow && <ModalContainer {...{ isShow, toggleIsShow }} />}
    {json &&
      json.map(({ id, name, username }, i) => (
        <div key={i}>
          <div>
            <p> id:{id}</p>
            <p> name:{name}</p>
            <p> userName:{username}</p>
          </div>
        </div>
      ))}
  </main>
);
