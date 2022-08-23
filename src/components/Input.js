function Input({onChange, value}) {
    console.log(value)
    return (
        <input onChange={onChange} value={value} ></input>
    );
}

export default Input;
