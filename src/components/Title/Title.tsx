type TitleProps = {
  label: string
  size?: "sm" | "base" | "lg" | "xl" | "2xl"
  color?: string
  cClassName?: string
}

export default function Title({ label, size, color, cClassName }: TitleProps) {
  return (
    <h1 className={`text-${size} text-${color}-500 ${cClassName} `}>{label}</h1>
  )
}
