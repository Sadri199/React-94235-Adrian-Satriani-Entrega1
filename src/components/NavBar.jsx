import { NavLink } from "react-router"
import CartWidget from "./CartWidget"
import { NavigationMenu,
    NavigationMenuItem, 
    NavigationMenuTrigger, 
    NavigationMenuContent, 
    NavigationMenuLink } from "./ui/navigation-menu"



function NavBar ({categoryName}) {

    return (
        <div className="grid w-[200px] gap-4">
        <p >Ravens Black Market</p>
        <NavigationMenu>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Our Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul>
                    <li>
                        {categoryName.map((category, index) => 
                        <NavigationMenuLink key={index} asChild>
                            <NavLink href="#" >{category}</NavLink>
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