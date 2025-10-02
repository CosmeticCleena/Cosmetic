
import { memo } from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-[200px]">
            <div className="relative w-16 h-16">
                <div className="absolute w-full h-full border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
                <div className="absolute w-full h-full border-4 border-secondary rounded-full animate-pulse opacity-30"></div>
            </div>
        </div>
    )
}

export default memo(Loading);