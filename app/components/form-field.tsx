import { useState, useEffect } from "react"

interface FormFieldProps {
    htmlFor: string
    label: string
    type?: string
    value: any
    onChange?: (...args: any) => any
    error?: string
  }
  
  export function FormField({ htmlFor, label, type = 'text', value, onChange = () => {} , error=""}: FormFieldProps) {
    const [errorText, setErrorText] = useState(error)

    useEffect(() => {
      setErrorText(error)
  }, [error])

    return (
      <>
        <label htmlFor={htmlFor} className="hidden">
          {label}
        </label>

        <input
           onChange={e => {
            onChange(e)
            setErrorText('')
           }}
          type={type}
          id={htmlFor}
          name={htmlFor}
          className="w-[220px] bg-dark border-primary text-primary border-b color-[rgba(200, 255, 0, 0.25)] p-[5px] "
          value={value}
        />
      <div className="font-[25px] tracking-wide text-red w-full">
            {errorText || ''}
        </div> 
      </>
    )
  }