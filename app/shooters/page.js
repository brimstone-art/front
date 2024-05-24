'use client'

import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function Shooters() {
    const shootersGames = useGetDataByCategory(
        endpoints.games,
        "shooter"
        );
    return (
        <main>
        {shootersGames ? (
            <CardsListSection id="shooter" title="Шутеры" data={shootersGames} />
        ) : (
            <Preloader />
        )}
        </main>
    )
}