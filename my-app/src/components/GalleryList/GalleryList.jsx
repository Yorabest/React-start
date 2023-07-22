
import { GallaryItem } from "../GalaryItem/GallaryItem"

// const item = painting[0]

export const GalleryList = ({items}) => {
    return (
        <ul>
            {
                items.map((item)=>{ 
                return (<li key={item.id}>
                 <GallaryItem
                  itemUrl={item.url}
                  title={item.title}
                  author={item.author}
                  price={item.price}
                        quantity={item.quantity}
                    />
             </li>)})
            }
        </ul>
    )
}