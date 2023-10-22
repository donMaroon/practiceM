import useCount from "../components/UseCount.Jsx"

const Counter = () => {
    // const count = useCount(0)
    const {val, handleDecrease, handleIncrease, resetValue, setValue}= useCount(0)


  return (
    <div>
      <h1>
        <h2>{val}</h2>
      </h1>
      <div>
        <input type="number" value={val} onChange={e => setValue(event.target.value)} />
      </div>
      <div>
      <button style={{padding: '13px 144px', marginTop: "10px"}} onClick={handleDecrease}>Decrement</button>
      </div>
      <div>
      <button style={{padding: '13px 147px', marginTop: "10px"}} onClick={handleIncrease}>Increment</button>
      </div>
      <div>
      <button style={{padding: '13px 150px', marginTop: "10px"}} onClick={resetValue}>SetValue</button>
      </div>
    </div>
  )
}

export default Counter
