type ContainerProps = {
  children: JSX.Element;
  extraSpace?: boolean;
};

export default function Container({
  children,
  extraSpace = false,
}: ContainerProps) {
  return (
    <div className={`md:mx-auto md:max-w-7xl ${extraSpace ? "px-5" : ""}`}>
      {children}
    </div>
  );
}
