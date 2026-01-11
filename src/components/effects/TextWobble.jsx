function TextWobble({ children, className = '' }) {
  const text = typeof children === 'string' ? children : String(children ?? '');
  const letters = text.split('');

  return (
    <h1 className={`wobble ${className}`.trim()}>
      {letters.map((letter, idx) => {
        const delay = (idx + 1) * 50;
        // Preserve spaces so layout doesn't collapse
        const rendered = letter === ' ' ? '\u00A0' : letter;
        return (
          <span key={idx} style={{ animationDelay: `${delay}ms` }}>
            {rendered}
          </span>
        );
      })}
    </h1>
  );
}

export default TextWobble;
