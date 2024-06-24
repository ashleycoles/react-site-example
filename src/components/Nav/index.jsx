import NavLink from "../NavLink"

function Nav() {
    return (
        <nav className="
            flex justify-between items-center 
            p-2
            bg-violet-600 
        ">
            <img 
                className="max-w-64" 
                src="https://io-academy.uk/wp-content/themes/ioacademy/img/logo.svg" 
                alt="iO company logo" 
            />

            <div className="flex gap-2">
                <NavLink />
                <NavLink />
                <NavLink />
            </div>
        </nav>
    )
}

export default Nav