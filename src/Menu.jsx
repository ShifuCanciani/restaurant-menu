import MenuItem from "./MenuItem"

const menu = ({ items }) => {
  return (
    <div className="section-center">
     {items.map((menuItem)=> {
        return <MenuItem key={menuItem.id} {...menuItem} />
     })} 
    </div>
  )
}

export default menu
