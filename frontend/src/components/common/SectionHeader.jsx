const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-white mb-4">
        {title}
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;