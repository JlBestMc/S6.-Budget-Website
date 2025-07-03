interface CheckboxProps {
  id: string | number;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export default function Checkbox({ id, checked, onCheckedChange }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      id={String(id)}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
    />
  );
}