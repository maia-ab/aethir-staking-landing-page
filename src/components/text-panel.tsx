type TextPanelProps = {
  title?: string;
  text: string;
};

function TextPanel({ title, text }: TextPanelProps) {
  return (
    <div className="flex flex-col justify-center items-center p-4 my-16 mx-auto max-w-[1780px] h-[300px] rounded-xl text-darkgreen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-beige to-green">
      <h2 className="text-4xl font-thin mb-6">{title}</h2>
      <p className="text-8xl">{text}</p>
    </div>
  );
}

export default TextPanel;
