type TextPanelProps = {
  title?: string;
  text: string;
};

function TextPanel({ title, text }: TextPanelProps) {
  return (
    <div className="flex flex-col justify-center items-center p-4 my-16 mx-auto md:h-[300px] rounded-xl text-darkgreen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-beige to-green">
      <h2 className="text-xl md:text-4xl md:mb-6 font-thin ">{title}</h2>
      <p className="text-6xl md:text-8xl">{text}</p>
    </div>
  );
}

export default TextPanel;
