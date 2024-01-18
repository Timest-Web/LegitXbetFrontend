import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useCreateSearchQuery = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  const createQueryString = useCallback(
    (
      param: { name: string; value: string } | { name: string; value: string }[]
    ) => {
      const params = new URLSearchParams(searchParams);
      if (Array.isArray(param)) {
        for (let i = 0; i < param.length; i++) {
          params.set(param[i].name, param[i].value);
        }
      } else {
        params.set(param.name, param.value);
      }

      return params.toString();
    },
    [searchParams]
  );

  const createSearchParams = ({
    param,
    url,
    replaceUrl,
  }: {
    param: { name: string; value: string } | { name: string; value: string }[];
    url?: string;
    replaceUrl?: boolean;
  }) => {
    if (Array.isArray(param)) {
      if (replaceUrl) replace(`${url ?? pathname}?${createQueryString(param)}`);
      else {
        push(`${url ?? pathname}?${createQueryString(param)}`);
      }
    } else {
      if (replaceUrl)
        replace(
          `${url ?? pathname}?${createQueryString({
            name: param.name,
            value: param.value,
          })}`
        );
      else {
        push(
          `${url ?? pathname}?${createQueryString({
            name: param.name,
            value: param.value,
          })}`
        );
      }
    }
  };

  return { searchParams, createSearchParams };
};

export default useCreateSearchQuery;
