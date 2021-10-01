import { ButtonProps } from "../types";
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={props.kind} {...props}>
      {children}
    </button>
  );
};
