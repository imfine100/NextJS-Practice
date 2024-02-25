import Link from 'next/link'
import Image from 'next/image'
import logImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';

export default function MainHeader() {
    console.log("Start Header~!!!");
    return (
        <> 
        <MainHeaderBackground />
    <header className={classes.header}>
        <Link className={classes.logo} href = "/" >
        <Image src = {logImg} alt = 'A Plate with food on it' priority />
        NextLevel Food
        </Link> 

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodie Community</Link>
                </li>
            </ul>
        </nav>
        </header>
        </>
    )
}