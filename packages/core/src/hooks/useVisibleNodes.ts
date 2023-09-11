import { useCallback } from 'react';

import { useStore } from '../hooks/useStore';
import { ReactFlowState } from '../types';
import { getNodesInside } from '../utils/graph';

function useVisibleNodes(onlyRenderVisible: boolean) {
  const nodes = useStore(
    useCallback(
      (s: ReactFlowState) =>
        onlyRenderVisible
          ? getNodesInside(s.nodeInternals, { x: 0, y: 0, width: s.width, height: s.height }, s.transform, true)
          : s.getNodes(),
      [onlyRenderVisible]
    )
  );

  return nodes;
}

export default useVisibleNodes;
