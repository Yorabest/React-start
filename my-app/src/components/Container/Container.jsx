export const Container = ({title, children})=>{
    return (<div className="countainer">
    {title && <h1>{title}</h1>} 
        {children}
    </div>)
}