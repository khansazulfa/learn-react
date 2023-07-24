import { useState, useRef } from 'react'
import './style.css'

const InputMath = ({icon, title, description, sumWith = 1}) =>{
  
const [result , setResult] = useState(0)
let myResult = 0
const input1 = useRef (null)
const input2 = useRef (null)

function handleKali() {
  const number1 = input1.current.value
  const number2 = input2.current.value
    
    setResult(number1*number2)
    
  }
  function handlebagi() {
    const number1 = input1.current.value
    const number2 = input2.current.value
      
    setResult(number1 / number2)
    }
    function handletambah() {
      const number1 = input1.current.value
      const number2 = input2.current.value
        
      setResult(Number(number1)+ Number(number2))
      }
      function handlekurang() {
        const number1 = input1.current.value
        const number2 = input2.current.value
          
        setResult(number1 - number2)
        }
  return (
    <>
    <div>
        <h3>Kalkulator Sederhana</h3>
        <form>
            <label for="fname">Inputkan Nomor</label>
            <input ref={input1} type='number'/>
            <label for="fname">Inputkan Nomor</label>
            <input ref={input2} type='number' />
        </form>
      
      <button onClick={handleKali}>Kali</button>
      <button onClick={handlebagi}>Bagi</button>
      <button onClick={handletambah}>Tambah</button>
      <button onClick={handlekurang}>Kurang</button>
      <h3>
        Hasil: {result}
      </h3>
    </div>
    </>
  )
}
export default InputMath
