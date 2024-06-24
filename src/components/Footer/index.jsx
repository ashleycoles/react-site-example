import NavLink from "../NavLink"

function Footer() {
    return (
        <footer className="flex flex-col items-center bg-violet-600 text-white py-10 mt-10">
            <p>Copyright 2024</p>
            <div className="flex gap-2 mt-2">
                <NavLink />
                <NavLink />
                <NavLink />
            </div>
        </footer>
    )
}

export default Footer