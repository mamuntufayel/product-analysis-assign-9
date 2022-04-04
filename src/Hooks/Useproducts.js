import { useEffect, useState } from "react"

const useProducts = () => {
    const [clothes, setClothes] = useState([]);
    useEffect(() => {
        fetch('tshirts.json')
            .then(res => res.json())
            .then(data => setClothes(data))
    }, [])
    return [clothes, setClothes]
}
export default useProducts;