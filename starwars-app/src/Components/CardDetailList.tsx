import { FieldDetailList } from "../types";
import { capitalizeFirstLetter, convertFromCamelCase } from "../utils/StringUitls";
import { getDetails } from "./PersonDetail";

export const CardDetailList = ({ caption, value }: FieldDetailList) => {

  return (
    <div>{}
      <div>{caption}</div>
      {
        value && getDetails(value)
      }
    </div>
  );
};
