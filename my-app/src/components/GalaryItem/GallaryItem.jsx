export const GallaryItem = ({itemUrl, title, author:{url, tag}, price,quantity}) => {
    return (
        <>
        <img src={itemUrl} alt="" width="480" />
        <h2>{ title}</h2>
        <p>Автор: <a href={url}>{ tag}</a></p>
        <p>Ціна: {price} грн</p>
            <p>Доступність:{quantity > 5 ? " є в наявності" : " закінчується"}</p>
        <button type="button">Додати в кошик</button>
</>
)
}