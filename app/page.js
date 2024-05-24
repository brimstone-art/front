'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { useGetDataByCategory } from "./api/api-hooks";
import { Preloader } from "./components/Preloader/Preloader";
import { Banner } from "./components/Banner/Banner"; 
import { Promo } from "./components/Promo/Promo"; 
import { endpoints } from "./api/config";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games ,"popular");
  const newGames = useGetDataByCategory(endpoints.games ,"new");
  return (
   <main className="main">
    <Banner/>
    {
      (popularGames && newGames) ? (
        <>
        <CardsListSection id="popular" title="Популярные"  type="slider" data={popularGames}  />
        <CardsListSection id="new" title="Новинки"  type="slider" data={newGames}  />
        </>
      ) : <Preloader />
    }
    <Promo/>
 
  </main>
  
  );
  
}