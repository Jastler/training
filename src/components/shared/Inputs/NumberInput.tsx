import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface InputNumberProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  fullWidth?: boolean;
  testId?: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  label = "Enter number",
  value,
  onChange,
  errorMessage,
  fullWidth = true,
  testId = "number-input",
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setError(null);
      onChange(newValue);
    } else {
      setError(errorMessage || "Only numbers are allowed");
    }
  };

  return (
    <TextField
      label={label}
      type="text"
      fullWidth={fullWidth}
      variant="outlined"
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error || ""}
      data-testid={testId}
    />
  );
};

export default InputNumber;
