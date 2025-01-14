import { useState } from 'react'
import './App.css'
import {
  InputBox
} from './components/index.js'
import { useCurrencyInfo } from './hooks/useCurrencyInfo.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [covertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from)
    setConvertedAmount(setAmount)
    setAmount(setConvertedAmount)
  }


  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }



  return (

    <div
      className='w-full h-screen bg-stone-800 flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}
    >
      <div className='w-full'>
        <div
          className='w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>

            <div
              className='w-full mb-1 '>
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrecy={from}

              />

            </div>
          </form>
        </div>
      </div>

    </div>


  )
}

export default App
