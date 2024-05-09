import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProduct = () => {
   const axiosPublic = useAxiosPublic();

    const {data:brand=[], isPending:loading, refetch}= useQuery({
        queryKey : ['Allbrand'],
        queryFn: async() => {
            const res = await axiosPublic.get('/product')
            return res.data
        }
    })
    return [brand,loading,refetch]
};

export default useProduct;