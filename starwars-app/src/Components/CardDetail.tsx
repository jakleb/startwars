import { FieldDetail } from "../types";
import { capitalizeFirstLetter, convertFromCamelCase } from "../utils/StringUitls";

export const CardDetail = ({ caption, value }: FieldDetail) => {
    return (
      <div className="card-detail">
        <div className="card-detail-caption">
          { caption && capitalizeFirstLetter(convertFromCamelCase(caption))}
        </div>
        <div className="card-detail-value">{value}</div>
      </div>
    );
  };
