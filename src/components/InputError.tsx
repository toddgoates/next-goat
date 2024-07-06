type InputErrorProps = {
  message: string;
};

export default function InputError({ message }: InputErrorProps) {
  return <p className="text-red-500">{message}</p>;
}
