import Router from "next/router";
import useLocalStorage from "@/customHooks/useLocalStorage";

export default function Favorites() {
    const goLinkHome = () => {
        Router.push('/')
    }
    return (
        <>

            <h1>Favorites</h1>
            <button onClick={goLinkHome}>Back home</button>

        </>
    )
}