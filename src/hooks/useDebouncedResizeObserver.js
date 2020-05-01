import { useState, useMemo } from "react"
import useResizeObserver from "use-resize-observer"
import { _debounce } from "lodash"

export default wait => {
  const [size, setSize] = useState({});
  const onResize = useMemo(() => _.debounce(setSize, wait, { leading: true }), [
    wait
  ]);
  const { ref } = useResizeObserver({ onResize });

  return { ref, ...size };
};
