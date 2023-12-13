import NavElements from "./NavElements";
import s from "./Navbar.module.css";

export default async function Navbar() {
    return (
        <nav className={s.root}>
            <div className="max-w-6xl px-6 mx-auto">
                <NavElements />
            </div>
        </nav>
    );
}
