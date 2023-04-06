type ToolProps = {
  title: string;
  Icon: React.FC<{ className?: string }>;
};


const Tool = ({ title, Icon }: ToolProps) => (
  <div className="w-56 text-center">
    <div className="text-lg font-semibold relative">
      <Icon className="inline-block text-green-400 text-4xl mb-2" />
      <span className="block">{title}</span>
    </div>
  </div>
);
export { Tool };
