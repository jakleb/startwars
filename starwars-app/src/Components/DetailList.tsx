import { CardDetail } from "./CardDetail"

export const DetailList = (fields: Object) => {
    return (
        <>
            {
                fields && Object.entries(fields)
                    .map(([caption, value], index) => {
                        if (!caption.startsWith("_"))
                            return <CardDetail key={index} caption={caption} value={value} />
                    })
            }
        </>
    )
}