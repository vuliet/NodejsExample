const CurrencyConvert = (props) => {
    if (props !== undefined && props !== null && typeof props === 'number') {
        return props.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
    } 
    return 0
}

export default CurrencyConvert