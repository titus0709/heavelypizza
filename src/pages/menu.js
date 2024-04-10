import {MenuList} from '../helpers/menuList'

import MenuItems from '../components/menuItem'
import '../styles/menu.css'
const Menu = () => {
    return (
        <div className="menu">
            <h1 className='menuTitle'>Our Menu</h1>
            <div className="menuList">
                {MenuList.map((menuItem,key)=>{
                    return(
                   <MenuItems 
                    key={key}
                    image={menuItem.image}
                     name={menuItem.name} 
                     price={menuItem.price}
                      />
                    ) 
                    
                })}
            </div>



        </div>
      );
}
 
export default Menu;