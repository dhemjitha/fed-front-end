import Button from "./Button";

const Greeting = () => {

    const name = "Dulran";
    const age = 20;

    return ( 
        <div>
            <h2>Hello, {name}! You are {age} years old.</h2>
            <Button />
        </div>
     );
}

export default Greeting;