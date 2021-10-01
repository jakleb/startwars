import { useEffect, useState, useCallback} from "react";
import { useCharacrterListData, useRouter } from "../CustomHooks/hooks";
import { FilterModalList } from "./FilterModalList";

export const FilterListWrapper = () => {

    const router = useRouter();

    const [currentChexbox, setCurrentCheckBox] = useState<HTMLInputElement>();

    const addFilterToUrl = useCallback(() => {
        if (currentChexbox) {
            const filter = `?filmtitle=${currentChexbox.value}`
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
            addFilterToUrl()
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