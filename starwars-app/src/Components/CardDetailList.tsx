import { FieldDetailList } from "../types";
import { DetailList } from "./DetailList";

export const CardDetailList = ({ caption, value }: FieldDetailList) => {

  return (
    <div className="details-group">
      <div className="details-group-title">{caption}</div>
      {
        value &&  <DetailList {...value}/>
      }
    </div>
  );
};
