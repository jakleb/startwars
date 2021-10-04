import { useEffect, useState, useCallback} from "react";
import { useCharacrterListData, useRouter } from "../CustomHooks/hooks";
import { APP_ENDPOINTS } from "../types";
import { FilterModalList } from "./FilterModalList";

export const FilterListWrapper = () => {

    const router = useRouter();

    const [currentChexbox, setCurrentCheckBox] = useState<HTMLInputElement>();
    const { filter } = useCharacrterListData();

    const addFilterToUrl = useCallback(() => {
        if (currentChexbox) {
            const filter = `${APP_ENDPOINTS.Filter}${currentChexbox.value}`
            const currentPath = router.location.pathname;
            currentChexbox.checked ?
                router.push(`${currentPath + filter}`) : router.push(`${currentPath.replace(filter, "")}`)
        };
    }, [currentChexbox, router])


    useEffect(() => {
        if(currentChexbox){
            addFilterToUrl();
        };
    },[currentChexbox])

    const onSelectTitle = useCallback((input: HTMLInputElement) => {
        if(currentChexbox === input){
            addFilterToUrl();
        }
        else {
            if(currentChexbox)
                currentChexbox.checked = false;
         
                setCurrentCheckBox(input);
        }
    },[currentChexbox])

    return (
        <>
            <FilterModalList onSelectTilte={onSelectTitle}/>
        </>
    )
}