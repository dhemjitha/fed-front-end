function Button() {

    const handleClick = () => {
        console.log("Button clicked!");
    }

    return (
        <button
            style={{
                backgroundColor: "white",
                color: "black",
                padding: "4px 8px",
                cursor: "pointer",
                borderRadius: "5px"
            }}
            type="button"
            onClick={handleClick}
        >
            Click me
        </button>
    );
}

export default Button;