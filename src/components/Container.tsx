type ContainerProps = {
  children: JSX.Element;
  extraSpace?: boolean;
};

export default function Container({
  children,
  extraSpace = false,
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl ${extraSpace ? "px-6 sm:px-8 lg:px-10" : "px-5 sm:px-8"}`}
    >
      {children}
    </div>
  );
}
