import "./Book.css"
import OrderButton from "./OrderButton";

const Book = (props) => {
  return (
    <div className="one-book">
      <img src={props.image} alt="Harry Potter" />
      <h2 className="heading">{props.title}</h2>
      <p>sasafdfdfffdfxyxyxyxaa</p>
      <p>sasashghhgjhjcyxccycas</p>
      <p>sasasmbnbbvbvccycxycxa</p>
      <p>sasasfdfsssfdcxycccbxx</p>
      <p>sasasxyxccklkxyxyyxb</p>
      <OrderButton />
    </div> 
  )
}

export default Book