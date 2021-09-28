import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../state";
import { ButtonKind } from "../types";
import { Button } from "./Button";
import { bindActionCreators } from "redux";
import { MouseEvent } from "react";


export const FavoriteModalButton = () => {
    const dispatch = useDispatch();
    const { removeAllFromFavorities } = bindActionCreators(actionCreators, dispatch);
    const { favorites } = useSelector((state: State) => state.bank);

    return (
        <>
            {
                !!favorites.length && <Button
                    click={(e: MouseEvent<HTMLButtonElement>) => { removeAllFromFavorities() }}
                    caption={"Remove all"}
                    kind={ButtonKind.warning}
                />
            }
        </>
    )
}