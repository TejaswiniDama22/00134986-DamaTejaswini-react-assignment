import React, { useState } from 'react';
import Child from '../child/Child';

export default function Parent() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Enter valid numbers');
      return;
    }

    let res = 0;
    switch (operator) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      default:
        res = 'Invalid operation';
    }
    setResult(res);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Parent Component</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter number 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter number 2"
        style={{ marginLeft: '10px' }}
      />
      <Child onOperate={handleOperation} result={result} />
    </div>
  );
}
