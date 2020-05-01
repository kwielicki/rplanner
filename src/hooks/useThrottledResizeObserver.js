import { useState, useMemo } from "react"
import useResizeObserver from "use-resize-observer"
import { _throttle } from "lodash"

export default wait => {
  const [size, setSize] = useState({});
  const onResize = useMemo(() => _.throttle(setSize, wait), [wait]);
  const { ref } = useResizeObserver({ onResize });

  return { ref, ...size };
};
