import {ReactNode} from "react";
import Link from "next/link";

interface Props {
    children?: ReactNode
}
export default function MainLayout({children}: Props) {
    return (
        <>
            <header>
                <nav>
                    <p><Link href="/favorites" legacyBehavior><a>Favorites</a></Link></p>
                    <p><Link href="/shopping-cart" legacyBehavior><a>Shopping-cart</a></Link></p>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}