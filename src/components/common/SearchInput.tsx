"use client";
import { SearchInputPropsType } from "@/types/SearchInputPropsType";

export function SearchInput({ value, onChange }: SearchInputPropsType) {
    return (
        <>
            <input
                type="text"
                className="input w-[40%] md:w-lg text-gray-800 p-2 border rounded-lg shadow-sm focus:outline-none focus:border-orange-500 dark:text-neutral-300"
                placeholder="Search for artists"
                value={value}
                onChange={onChange}
                list="albums"
            />
            <datalist id="albums">
                <option value="coldplay" />
            </datalist>
        </>
    );
}
