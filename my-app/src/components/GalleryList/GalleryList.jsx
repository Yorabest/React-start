
import { GallaryItem } from "../GalaryItem/GallaryItem";
import PropTypes from "prop-types";
import s from "./GalleryList.module.css"
// const item = painting[0]



export const GalleryList = ({items}) => {
    return (
        <ul className={s.GalleryItemList}>
            {
                items.map((item)=>{ 
                return (<li key={item.id} className={s.GalleryItem}>
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

// GalleryList.propTypes = {
//     items: PropTypes.shape.isRequired
// }