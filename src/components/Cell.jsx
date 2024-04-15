function Cell({value ,onClick}) {
    return(
        <button onClick={onClick} className = "cell">
            {value}
        </button>
    )
}

export default Cell