import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useUrlPathChecker = ({urlPath}: {urlPath: string}) => {
  const router = useRouter();
  const [isUrlPathIncluded, setIsUrlPathIncluded] = useState(false);

  useEffect(() => {
    const currentURL = router.asPath;
    const newIsUrlPathIncluded = currentURL.includes(urlPath);
    setIsUrlPathIncluded(newIsUrlPathIncluded);
  }, [router.asPath, urlPath]);

  return isUrlPathIncluded;
};

export default useUrlPathChecker;
