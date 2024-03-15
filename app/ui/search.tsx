'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
    var searchParams = useSearchParams();
    var pathname = usePathname();
    var {replace} = useRouter();
    //useDebouncedCallback函数将包装 handleSearch 的内容，并仅在用户停止键入（300 ms）后的特定时间后运行代码。
    const handleSearch= useDebouncedCallback((value:string)=>{

            var urlSearchParams =new URLSearchParams(searchParams);
            //当用户键入新的搜索查询时，您希望将页码重置为1
            urlSearchParams.set('page', '1');
            console.log(urlSearchParams);
            console.log(searchParams);
            console.log(value);
            if (value){
                urlSearchParams.set('query',value)
            }else {
                urlSearchParams.delete('query')
            }
            replace (`${pathname}?${urlSearchParams.toString()}`)

    },300)

    return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={event => handleSearch(event.target.value)}
        // 保持根据url访问时，自动填入
        defaultValue={searchParams.get('query')}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
