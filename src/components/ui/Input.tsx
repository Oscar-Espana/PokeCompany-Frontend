import { FieldInputProps, useField } from "formik";
import { InputHTMLAttributes } from "react";
import TextField from "@mui/material/TextField";

interface Props
  extends Omit<
      FieldInputProps<string>,
      "name" | "value" | "onBlur" | "onChange"
    >,
    InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const Input = (props: Props) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...field}
      {...props}
      color="secondary"
      size="medium"
      fullWidth
      margin="normal"
    />
  );
};
