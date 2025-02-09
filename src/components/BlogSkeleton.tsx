import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return <div role="status" className="animate-pulse">
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">
                    <div className="flex flex-col justify-center">
                        <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
                    </div> 
                    <div className="flex justify-center">
                        <div className="flex flex-col justify-center font-extralight pl-2">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div> 
                        <div className="flex flex-col justify-center pl-2">
                            <Circle />
                        </div>
                        <div className="flex flex-col justify-center text-slate-500 pl-2 font-thin">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="text-md font-thin">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="pt-4 text-sm font-thin text-slate-500">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
    </div>
}