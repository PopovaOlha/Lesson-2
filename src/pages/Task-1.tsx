import { useState } from 'react';
import InputField from '../components/InputField';

const Task1 = () => {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <InputField
        label="Enter the length"
        type="number"
        value={value}
        onChange={handleChange}
        name="length"
        placeholder="•••••••"
      />
    </div>
  );
};
export default Task1;
