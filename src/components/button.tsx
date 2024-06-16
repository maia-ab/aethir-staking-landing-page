type ButtonProps = {
  className: string;
  children: React.ReactNode;
};

function Button({className, children }: ButtonProps) {
  return <button className={className}>{children}</button>;
}

export default Button;
