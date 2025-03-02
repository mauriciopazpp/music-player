import React from "react";

export interface SearchInputPropsType {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
