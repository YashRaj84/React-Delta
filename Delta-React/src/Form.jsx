function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
}

export default function Form() {
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input placeholder="Enter your name" type="text"/>
        <button>Submit</button>
        </form>
    );
}