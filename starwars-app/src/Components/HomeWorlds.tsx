import { useEffect, useState } from "react";
import { useAppStore, useRouter } from "../CustomHooks/hooks"
import { HomeWorld } from "../types";
import { CardDetailList } from "./CardDetailList";

const HomeWorlds = () => {

    const [homeworlds, setHomeWorlds] = useState<HomeWorld>() 
    const { all } = useAppStore();
    const {query: {personid}} = useRouter();

    useEffect(() => {
        if(all.length && !homeworlds){
            const person = all.find(({id}) => id === personid);
            if(person && person.homeworld )
                setHomeWorlds(person.homeworld);
        }
    },[all, personid, homeworlds])

    return (
        !!homeworlds && <CardDetailList caption={"Homeworld"} value={homeworlds} />
    )
}

export default HomeWorlds as React.ComponentType;