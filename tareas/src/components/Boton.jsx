import Button from 'react-bootstrap/Button';

export function Boton(props) {

    const { submit, submit1, submit2, submit3 } = props

    const handleBtnClick = (submitValue) => {
        console.log(`Button Clicked: ${submitValue}`)
    }
    return (
        <>
            < Button onClick={() => handleBtnClick(submit)}>{submit}</Button>
            {submit1 && (
                <Button onClick={() => handleBtnClick(submit1)}>{submit1}</Button>
            )}
            {submit2 && (
                <Button onClick={() => handleBtnClick(submit2)}>{submit2}</Button>
            )}
            {submit3 && (
                <Button onClick={() => handleBtnClick(submit3)}>{submit3}</Button>
            )}

        </>
    )
}