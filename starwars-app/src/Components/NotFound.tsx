import { FaSadTear } from "react-icons/fa";
import { useRouter } from "../CustomHooks/hooks"

export const NotFound = () => {
    const router = useRouter();

    return (
        <div className="not-found-wrapper">
            <div className="not-found-container">
                <h1 className="not-found-error"> 404 - Not Found</h1>
                <div><FaSadTear className="sad-icon"/></div>
            </div>
        </div>
    )
}