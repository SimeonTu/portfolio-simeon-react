function TextWobble({ children, className = '', style, as: Component = 'h1' }) {
  const text = typeof children === 'string' ? children : String(children ?? '');
  const letters = text.split('');

  return (
    <Component className={`wobble ${className}`.trim()} style={style}>
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
    </Component>
  );
}

export default TextWobble;
