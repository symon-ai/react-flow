import { FC, PropsWithChildren, useContext } from 'react';

import ReactFlowProvider from '../../components/ReactFlowProvider';
import StoreContext from '../../contexts/RFStoreContext';

const Wrapper: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const isWrapped = useContext(StoreContext);

  if (isWrapped) {
    // we need to wrap it with a fragment because it's not allowed for children to be a ReactNode
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
    return <>{children}</>;
  }

  return <ReactFlowProvider>{children}</ReactFlowProvider>;
};

Wrapper.displayName = 'ReactFlowWrapper';

export default Wrapper;
