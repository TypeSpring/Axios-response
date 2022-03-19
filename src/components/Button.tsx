import React from "react";
import { request } from "../config/axios";
interface Props {
  updateResult: (arg: string) => void;
  num: string;
}

const Button: React.FC<Props> = ({ num, updateResult }) => {
  const getAxios = async () => {
    await request.get(`/${num}`).then((res) => {
      console.log(res.data);
      updateResult(res.data);
    });
  };

  return <button onClick={getAxios}>{num}</button>;
};
export default Button;
