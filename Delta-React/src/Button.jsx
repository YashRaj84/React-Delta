function handleClick(event) {
  console.log("Hello!");
  console.log(event);
}

function handleMouseOver() {
  console.log("Goodbye!");
}

function handleDblClick() {
  console.log("Double Clicked!");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Go</button>
      <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet dicta.</p>
      <button onDoubleClick={handleDblClick}>Submit</button>
    </div>
  )
}