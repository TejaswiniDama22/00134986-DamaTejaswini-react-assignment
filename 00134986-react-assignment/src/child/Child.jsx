import React from 'react';

export default function Child({ onOperate, result }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Child Component</h3>
      <button onClick={() => onOperate('+')}>+</button>
      <button onClick={() => onOperate('-')} style={{ margin: '0 10px' }}>-</button>
      <button onClick={() => onOperate('*')}>*</button>

      <div style={{ marginTop: '20px' }}>
        <strong>Result: </strong>{result !== null ? result : 'Click a button'}
      </div>
    </div>
  );
}
