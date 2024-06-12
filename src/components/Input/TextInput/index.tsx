type TextInputProps = {
  label: string
  value?: string | number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  placeholder?: string
  maxLength?: number
}

export default function TextInput({
  label,
  value,
  onChange,
  required,
  placeholder,
  maxLength,
}: TextInputProps) {
  return (
    <div className="flex flex-col max-w-fit">
      <label htmlFor="">{label}</label>
      <input
        type="text"
        className="w-[280px] p-2 rounded focus:outline-none"
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  )
}
