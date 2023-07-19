import { NextPage } from "next"

import { GameCollectionProvider } from "../src/app/gameCollection/controller/gameCollectionController";
import CollectionPage from "../src/app/gameCollection/view/pages/Collection";

const Collection: NextPage = () => {
    return (
        <GameCollectionProvider>
            <CollectionPage />
        </GameCollectionProvider>
    )
}

export default Collection;