type BadgeType = {
  index: number
  element: string
}
export const Badge = ({ index, element }: BadgeType) => (
  <li
    key={index}
    className="inline-flex items-center rounded-md px-2 py-1 text-xs font-bold text-blue ring-1 ring-inset"
  >
    {element}
  </li>
)
