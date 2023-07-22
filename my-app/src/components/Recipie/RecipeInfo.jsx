export const RecipeInfo = ({info, icon: Icon}) => {
    return <li>
        <Icon size={30} />
        <p>{info}</p>
    </li>
}