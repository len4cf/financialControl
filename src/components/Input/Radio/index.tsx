type RadioProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  isChecked: boolean
  name: string
  value: string
  label: string
}

export default function Radio({
  onChange,
  isChecked,
  name,
  value,
  label,
}: RadioProps) {
  return (
    <div className="flex items-center gap-3 ps-4 border  rounded dark:border-zinc-400 px-4 py-2">
      {label}
      <input
        type="radio"
        checked={isChecked}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
