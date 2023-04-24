import { useState } from 'react';
import Dropdown from './components/Dropdown';
function App() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { label: 'red', value: 'red' },
    { label: 'blue', value: 'blue' },
    { label: 'green', value: 'green' },
  ];
  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default App;
