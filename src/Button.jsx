import React, { useState } from 'react'; 
function Button() { 
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className='Main'>
      <input className='input' type="text" value={input} readOnly />
      <div>
        <button className='btn' onClick={() => handleClick('7')}>7</button>
        <button className='btn' onClick={() => handleClick('8')}>8</button>
        <button  className='btn'onClick={() => handleClick('9')}>9</button>
        <button className='btn' onClick={() => handleClick('/')}>/</button>
      </div>
      <div>
        <button className='btn' onClick={() => handleClick('4')}>4</button>
        <button  className='btn'onClick={() => handleClick('5')}>5</button>
        <button  className='btn'onClick={() => handleClick('6')}>6</button>
        <button className='btn' onClick={() => handleClick('*')}>*</button>
      </div> 
      <div>
        <button className='btn' onClick={() => handleClick('1')}>1</button>
        <button  className='btn'onClick={() => handleClick('2')}>2</button>
        <button  className='btn'onClick={() => handleClick('3')}>3</button>
        <button  className='btn'onClick={() => handleClick('-')}>-</button>
      </div>
      <div>
        <button  className='btn'onClick={() => handleClick('0')}>0</button>
        <button  className='btn'onClick={() => handleClick('.')}>.</button>
        <button  className='btn'onClick={handleCalculate}>=</button>
        <button  className='btn'onClick={() => handleClick('+')}>+</button>
      </div>
      <div>
        <button className='btn' onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default Button;
