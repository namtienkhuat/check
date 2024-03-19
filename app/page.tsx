"use client";
import Content from "@/components/Content";
import Filter from "@/components/Filter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import SignUp from "@/components/SignUp";
import Title from "@/components/Title";
import { useState } from "react";

export default function Home() {
    const [increase, setIncrease] = useState(0);
    const handleClick = () => {
        setIncrease(increase + 1);
    };
    return (
        <main className="mx-[120px]">
            <Header increase={increase}></Header>
            <Navbar></Navbar>
            <Content></Content>
            <Title></Title>
            <Filter handleClick={handleClick}></Filter>
            <Pagination></Pagination>
            <SignUp></SignUp>
            <Footer></Footer>
        </main>
    );
}
