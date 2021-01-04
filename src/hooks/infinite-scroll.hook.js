import React, { useEffect, useState } from "react";

const useInfiniteScroll = (callbackFunction) => {
  const [isFetchingData, setIsFetchingData] = useState(false);

  const scrollHandler = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setIsFetchingData(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      return () => window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (!isFetchingData) return;
    callbackFunction.call(this);
  }, [isFetchingData]);

  return [isFetchingData, setIsFetchingData];
};

export default useInfiniteScroll;
