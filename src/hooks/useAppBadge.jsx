import {useState} from 'react'

const useAppBadge = () => {
    const [counter, setCounter] = useState(1);
    //when the app is installed as a pwa the navigator will make a function called
    // setAppBadgeAvailable
    const setBadge = () => {
        setCounter(counter + 1);
        if (navigator.setAppBadge) {
            navigator.setAppBadge(counter);
        } else if (navigator.setClientBadge) {
            navigator.setClientBadge();
        }
    };
    const clearBadge = () => {
        setCounter(1);
        if (navigator.clearAppBadge) {
            navigator.clearAppBadge();
        } else if (navigator.clearClientBatch) {
            navigator.clearClientBatch();
        }
        
    };
  return [setBadge, clearBadge]
}

export default useAppBadge