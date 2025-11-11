//Show a Hello Message to the user in different colors.
//Pass 2 values as props: uesrName and color.

export default function Activity({userName, textColor}) {
    let styles = { color: textColor};
    return (
        <h1 style={styles}>Hello, {userName}</h1>
    );
}