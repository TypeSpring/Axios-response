import React from "react";
import { request } from "../config/axios";
interface Props {
  updateResult: (arg: string) => void;
  num: string;
}

const Button: React.FC<Props> = ({ num, updateResult }) => {
  const getAxios = async () => {
    await request
      .get(`/${num}`)
      .then((res) => {
        console.log(res.data);
        updateResult(`${num}번은 then으로 들어오네요! ` + res.data);
      })
      .catch((err) => updateResult(`${num}번은 catch로 들어오네요! `));
  };

  return (
    <button className="btn" onClick={getAxios}>
      {num}
    </button>
  );
};
export default Button;
