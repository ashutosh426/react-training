import { useEffect } from "react";

// this is a custom hook
function useDocumentTitle(count) {
    useEffect(()=>{
        document.title = `Clicked ${count} times.`;
    },[count]) 
}

export default useDocumentTitle;