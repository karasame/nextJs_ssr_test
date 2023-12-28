/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

type Props = {
  isShow: boolean;
  json: { url?: string };
  toggleIsShow: () => void;
};

export const Modal: React.FC<Props> = ({ isShow, json, toggleIsShow }) => (
  <div
    onClick={toggleIsShow}
    style={{
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, .2)",
      position: "fixed",
      top: 0,
      left: 0,
    }}
  >
    <div
      style={{
        position: "relative",
        marginRight: "auto",
        marginLeft: "auto",
        width: "80%",
        minWidth: 440,
      }}
    >
      <div
        style={{
          marginTop: 125,
          marginBottom: 125,
          position: "relative",
          marginLeft: "auto",
          marginRight: "auto",
          background: "#fff",
          boxShadow: "3px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: 13,
          display: "block",
          padding: "21px 8px 21px",
          height: "auto",
        }}
      >
        <div
          style={{
            paddingTop: 15,
            paddingBottom: 23,
          }}
        >
          <div>
            <img alt="" src={json.url} height={300} width={300} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
