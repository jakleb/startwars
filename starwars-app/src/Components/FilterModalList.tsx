import { MouseEvent, useEffect, useState } from "react";
import { useFilters, useRouter } from "../CustomHooks/hooks";
import { Film, Films } from "../types";
import Loader from "./Loader";

export const FilterModalList = () => {

    const [films, setFilms] = useState<Film[]>([]);

    const { films: allFilms } = useFilters();

    const router = useRouter();

    useEffect(() => {
        console.log(allFilms);
        if(allFilms)
            setFilms(allFilms);
    }, [allFilms]);

    const onSelectTitle = ({target}: MouseEvent<HTMLInputElement>) => {
        if((target as HTMLInputElement).checked){
            const filter = `?filmtitle=${(target as HTMLInputElement).value}`
            router.push(`${router.location.pathname + filter}`);
        }
    }

    return (
        <>
            {
                films.length ?
                        films.map(({ title }, index) => {
                            return <div className="filter-row" key={index}>
                                <div>
                                    <input onClick={ onSelectTitle } type="checkbox" value={title} />
                                </div>
                                <div>{title}</div>
                            </div>
                        }) : <Loader />
            }
            
        </>
    )
}