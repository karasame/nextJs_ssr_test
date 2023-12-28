import { ModalContainer } from "./Modal/modal.container";

type Props = {
  isShow: boolean;
  data: Data;
  toggleIsShow: () => void;
};

type Data = { id: string; name: string; username: string }[];

export const TopPage: React.FC<Props> = ({ isShow, data, toggleIsShow }) => (
  <main>
    <button onClick={toggleIsShow}>12345</button>
    {isShow && <ModalContainer {...{ isShow, toggleIsShow }} />}
    {Object.keys(data).length > 0 &&
      data.map(({ id, name, username }, i) => (
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
