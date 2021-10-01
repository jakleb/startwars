import { FaStar } from "react-icons/fa";
import { MouseEvent } from "react";
import { useAppStore, useRouter } from "../CustomHooks/hooks";

export const FavoriteModalList = () => {

    const {favorites, removeFromFavorities} = useAppStore();
    const router = useRouter();

    const goToDetail = (id: string) => {
        router.push(`/detail/${id}`)
    };

    return (
        <>
            {favorites.length ? (
            favorites.map(({name, id}, index) => (
              <div className="modal-row" key={index}>
                <div className="modal-store-element" onClick={() => { goToDetail(id) }}>
                  {name}
                </div>
                <div className="modal-row-action-container">
                  <FaStar
                    color={"#d0c438"}
                    size={"15px"}
                    onClick={(e: MouseEvent<SVGAElement>) => { removeFromFavorities(id) }}
                  />
                </div>
              </div>
            ))) : (<div className="empty-favorities-list">Favorite list is empty!</div>)
          }
        </>
    )
}
