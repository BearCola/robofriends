import React, { useEffect, useState } from "react";

const ErrorBoundry = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  // useEffect(() => {
  //   setHasError(true);
  // }, []);

  if (hasError) {
    return <h1>Ooooops, That is not good</h1>;
  }

  return children;
};

export default ErrorBoundry;
