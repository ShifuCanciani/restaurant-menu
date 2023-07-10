import { useState } from "react";
import menu from './data'
import Title from "./title";
import Menu from "./Menu";
import Header from "./Header";
import Navbar from "./Navbar";
import Categories from "./Categories";
import GrandChef from "./GrandChef";
import Cucina from "./Cucina";
import Carousel from "./Carousel";
import ReactCode from "./ReactCode";
import { Fade } from "react-awesome-reveal"
import ThemeToggle from "./ThemeToggle";
import CategoriesCheffes from "./CategoriesCheffes";
import ReservationTable from "./ReservationTable";

const allCategories = ['all', ...new Set(menu.map((item)=> item.category))]
const tempCatergoriesCheffes = menu.map((item)=> item.price)
const tempSet = new Set(tempCatergoriesCheffes)
const tempCheffes = [...tempSet]


const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  const [categoriesCheffes, setCategoriesCheffes] = useState(tempCheffes)

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }
  
  const filterCheffes = (oneCheffe) =>{
    const newCheffes = menu.filter((item)=> item.price === oneCheffe)
    setMenuItems(newCheffes)
  }

  return <main>
    <ThemeToggle />
      <Header />

    <section className="header-cucina">
      <Fade>
        <Title text='Cucina' />
        <Cucina />
        </Fade>
    </section>

    <section className="header-cheffes" id="chefs">
      <Fade>
        <Title text="'cheffes' della cucina" />
        <GrandChef />
        </Fade>
    </section>

    <section className="menu" id="projects">
      <Title text='Menu' />
      <Categories categories={categories} filterItems={filterItems} />
      <CategoriesCheffes categoriesCheffes={categoriesCheffes} filterCheffes={filterCheffes} />
      <Menu items={menuItems}/>
    </section>

    <section className="header-cheffes" id='news'>
      <Fade>
        <Title text="Les nouvelles ..." />
        <Carousel />
        </Fade>
    </section>

    <section className="header-reservation" id="reservation">
      <Fade>
        <Title text='Réservation' />
          <ReservationTable />
        </Fade>
    </section>

    <section className="header-cucina" id="react">
      <Fade>
        <Title text='React Code' />
        <ReactCode />
        </Fade>
    </section>


      </main>;
};
export default App;
