import clsx, { ClassValue } from "clsx";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

function twMerge(arg0: any): string {
    const result = "Implementación de twMerge con " + arg0;
    return result;
    //throw new Error("Function not implemented.");
}
