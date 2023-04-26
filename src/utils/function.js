export const onChangeText = (setState, setValid) => (e) => {
   
    setState(e.target.value)
}

export const onChangeFile = (setState, setValid) => (e) => {
    if (e.target.files) {
        setState(e.target.files[0])
    }
}