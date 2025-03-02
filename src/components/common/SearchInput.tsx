"use client";

import { SearchInputProps } from "@/types/SearchInputProps";

export function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <>
            <input
                type="text"
                className="input text-gray-800 p-2 border rounded-lg shadow-sm focus:outline-none focus:border-orange-500 dark:text-neutral-300"
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
