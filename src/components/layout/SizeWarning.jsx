import useResponsive from '../../hooks/useResponsive';

function SizeWarning() {
  const { isTooSmall } = useResponsive();

  if (!isTooSmall) return null;

  return (
    <div className="size-warning">
      <p>Your screen size is too small :&#40;</p>
    </div>
  );
}

export default SizeWarning;
