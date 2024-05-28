

type TextInputProps = {
    label: string
    value?: string | number
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TextInput({label, value, onChange} : TextInputProps) {
    return (
        <div className="flex flex-col max-w-fit">
            <label htmlFor="">{label}</label>
            <input type="text" className="w-[280px]" value={value} onChange={onChange} />
        </div>
    )
}