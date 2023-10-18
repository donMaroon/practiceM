import useCount from "../components/UseCount.Jsx"

const Counter = () => {
    const count = useCount(0)


  return (
    <div>
      <h1>
        <h2>{count.val}</h2>
      </h1>
      <div>
      <button style={{padding: '13px 144px', marginTop: "10px"}} onClick={count.handleDecrease}>Decrement</button>
      </div>
      <div>
      <button style={{padding: '13px 147px', marginTop: "10px"}} onClick={count.handleIncrease}>Increment</button>
      </div>
      <div>
      <button style={{padding: '13px 150px', marginTop: "10px"}} onClick={count.setvalue}>SetValue</button>
      </div>
    </div>
  )
}

export default Counter
