import { DetailsWrapperProps } from "../types"

export const DetailsWrapper = ({ children, totalCount }: DetailsWrapperProps) => {
    return children ? totalCount && totalCount > 1 ?
        <div className="details-wrapper">{children}</div> : <>{children}</>
        : <></>
}