function printHello() {
  console.log("Hello!");
}

function printBye() {
  console.log("Goodbye!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Go</button>
      <p onClick={printBye}>This para is for event demo.</p>
    </div>
  )
}