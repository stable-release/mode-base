import LeftElements from "./LeftElements";

export default async function LeftBar() {
    return (
        <div className={s.root}>
            <div className="max-w-6xl px-6 mx-auto">
                <LeftElements />
            </div>
        </div>
    );
}