import PropTypes from "prop-types";
import './GallaryItem.css'

export const GallaryItem = ({ itemUrl, title, author: { url, tag }, price, quantity }) => {
    return (
        <div className=" GallaryItem">
            <img src={itemUrl} alt="" className="image" />
            <h2 className="title">{title}</h2>
            <p>Автор: <a href={url}>{tag}</a></p>
            <p>Ціна: {price} грн</p>
            <p>Доступність:{quantity > 5 ? " є в наявності" : " закінчується"}</p>
            <button className={quantity > 5 ? "green" : "red"} type="button">Додати в кошик</button>
        </div>
    )
};

GallaryItem.propTypes = {
    itemUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}