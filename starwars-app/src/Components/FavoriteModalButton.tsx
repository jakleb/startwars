import { ButtonKind } from "../types";
import { Button } from "./Button";
import { MouseEvent } from "react";
import { useAppStore } from "../CustomHooks/hooks";


export const FavoriteModalButton = () => {
    const {removeAllFromFavorities, favorites} = useAppStore();

    return (
        <>
            {
                !!favorites.length && <Button
                    onClick={(e: MouseEvent<HTMLButtonElement>) => { removeAllFromFavorities() }}
                    kind={ButtonKind.warning}>Remove </Button>
            }
        </>
    )
}