type TextPanelProps = {
  title?: string;
  text: string;
};

function TextPanel({ title, text }: TextPanelProps) {
  return (
    <div className="bg-green w-[92%] mx-auto">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default TextPanel;
