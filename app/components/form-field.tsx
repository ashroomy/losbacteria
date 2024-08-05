interface FormFieldProps {
    htmlFor: string
    label: string
    type?: string
    value: any
    onChange?: (...args: any) => any
  }
  
  export function FormField({ htmlFor, label, type = 'text', value, onChange = () => {} }: FormFieldProps) {
    return (
      <>
        <label htmlFor={htmlFor} className="hidden">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type}
          id={htmlFor}
          name={htmlFor}
          className="w-[220px] bg-dark border-primary text-primary border-b color-[rgba(200, 255, 0, 0.25)] p-[5px] "
          value={value}
        />
      </>
    )
  }