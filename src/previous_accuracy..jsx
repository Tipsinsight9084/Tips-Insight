import React from "react";
import Accuracy from "./one_accuracy";

export default function Previous_accuracy(){


    return (
        <>
        <Accuracy league = "The Hundred Mens 2024" tosspassed={31} matchpassed={30} total={32}/>
        <Accuracy league = "World Cup 2024" tosspassed={51} matchpassed={53} total={55}/>
        <Accuracy league = "Indian Premier League 2024" tosspassed={67} matchpassed={69} total={74}/>
       
        </>
    )
}