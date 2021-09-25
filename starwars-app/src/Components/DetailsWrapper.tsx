import { ReactChild, ReactFragment, ReactPortal } from "react"
import { DetailsWrapperProps } from "../types"

export const DetailsWrapper = ({ children, totalCount }: DetailsWrapperProps) => {
    console.log(children, totalCount);
    return children ? totalCount && totalCount > 1 ?
        <div className="details-wrapper">{children}</div> : <>{children}</>
        : <></>
}