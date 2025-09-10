import { NavLink, Link } from "react-router"
import CartWidget from "./CartWidget"
import { NavigationMenu,
    NavigationMenuItem, 
    NavigationMenuTrigger, 
    NavigationMenuContent, 
    NavigationMenuLink } from "./ui/navigation-menu"



function NavBar ({categoryName}) {

    return (
        <div className="grid w-[200px] gap-4">
        <Link to={"/"}>Ravens Black Market</Link>
        <NavigationMenu>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Our Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul>
                    <li>
                        {categoryName.map((category, index) => 
                        <NavigationMenuLink key={index} asChild>
                            <NavLink to={`/category/${category}`} >{category}</NavLink>
                        </NavigationMenuLink>
                        )}
                    </li>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenu>
        <CartWidget />
        </div>
    )
}

export default NavBar