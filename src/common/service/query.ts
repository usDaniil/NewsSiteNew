import { useMutation } from "react-query";
import { UseMutate } from "../config/react-query";
import { Service } from "./service";
import { RegisterDto } from "../dto";


export const useRegister = (): UseMutate<RegisterDto> => {
    return useMutation(Service.register,)
}