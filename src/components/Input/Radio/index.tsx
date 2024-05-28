

type RadioProps = {

    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    isChecked: boolean
    name: string
    value: string
    label: string
}

export default function Radio({onChange, isChecked, name, value, label} : RadioProps) {

    return (
        <label className="flex gap-3">
        {label}
        <input
          type="radio"
          checked={isChecked}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    )
}