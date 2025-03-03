"use client";
import { SearchInputPropsType } from "@/types/SearchInputPropsType";

export function SearchInput({ value, onChange }: SearchInputPropsType) {
    return (
        <>
            <input
                type="text"
                className="search-input"
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
