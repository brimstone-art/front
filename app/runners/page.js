'use client'

import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function Runners() {
 const runnersGames = useGetDataByCategory(
    endpoints.games,
    "runner"
 );
 return (
    <main className={"main-inner"}>
      {runnersGames ? (
        <CardsListSection id="runner" title="Ранеры" data={runnersGames} />
      ) : (
         <Preloader />
      )}
    </main>
 )
}

