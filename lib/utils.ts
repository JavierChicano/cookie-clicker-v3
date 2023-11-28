import clsx, { ClassValue } from "clsx";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

function twMerge(arg0: any): string {
    throw new Error("Function not implemented.");
}
