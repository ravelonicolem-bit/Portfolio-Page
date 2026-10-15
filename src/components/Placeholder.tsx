type PlaceholderProps = {
  children: string;
};

/** Renders [PLACEHOLDER: ...] text with a visible highlight so missing facts are easy to find. */
export function Placeholder({ children }: PlaceholderProps) {
  if (!children.includes("[PLACEHOLDER")) {
    return <>{children}</>;
  }

  const parts = children.split(/(\[PLACEHOLDER:[^\]]+\])/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("[PLACEHOLDER") ? (
          <mark key={`${part}-${index}`} className="placeholder">
            {part}
          </mark>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}
