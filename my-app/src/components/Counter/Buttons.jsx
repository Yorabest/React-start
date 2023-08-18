export function Buttons({onEncrement, onDecrement}) {
    return <>
    <button type="button" onClick={onEncrement}>
                + one
            </button>
     <button type="button" onClick={onDecrement}>
                - one
        </button>
    </>
}