import { ButtonProps } from "../types";
export const Button = (props: ButtonProps) => {
  return (
    <button className={props.kind} onClick={props.click}>
      {props.caption}
    </button>
  );
};
