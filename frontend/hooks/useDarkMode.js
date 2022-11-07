import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialvalue) =>{
    const [value,setValue] = useLocalStorage(key,initialvalue)
    const updateInput = (newValue) =>{
        setValue(newValue)
    }
    return [value, updateInput]
}
