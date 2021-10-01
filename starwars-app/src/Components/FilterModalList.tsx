import { useEffect, useState } from "react";
import { useCharacrterListData, useFilters, useRouter } from "../CustomHooks/hooks";
import { Film, FilterModalListProps } from "../types";
import Loader from "./Loader";

export const FilterModalList = ({ onSelectTilte }: FilterModalListProps) => {

    const [films, setFilms] = useState<Film[]>([]);
    const { films: allFilms } = useFilters();
    const {filter} = useCharacrterListData();

    useEffect(() => {
        console.log(allFilms);
        if(allFilms)
            setFilms(allFilms);
    }, [allFilms]);

    return (
        <>
            {
                films.length ?
                        films.map(({ title }, index) => {
                            return <div className="filter-row" key={index}>
                                <div>
                                    <input onClick={(e) => { onSelectTilte(e.target as HTMLInputElement) }} type="checkbox" value={title} />
                                </div>
                                <div>{title}</div>
                            </div>
                        }) : <Loader />
            }
            
        </>
    )
}