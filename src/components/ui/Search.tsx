"use client";
import { useState, useEffect } from "react";
import useDebounce from "@/lib/hooks/useDebounce";
import { fetchArtistByName } from "@/lib/api/theaudiodb/fetchArtistByName";
import { ArtistDBaudio } from "@/types/Artist";
import { SearchInput } from "../common/SearchInput";
import { FloatingSearchContent } from "./FloatingSearchContent";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [artists, setArtists] = useState<ArtistDBaudio[]>([]);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedQuery.trim()) {
        try {
          const result = await fetchArtistByName(debouncedQuery);
          setArtists(result ? [result] : []);
        } catch (error) {
          console.error("Error fetching artist:", error);
          setArtists([]);
        }
      } else {
        setArtists([]);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  const handleSelectArtist = () => {
    setArtists([]);
  };

  return (
    <>
      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
      {artists.length > 0 && (
        <FloatingSearchContent artists={artists} onSelectArtist={handleSelectArtist} />
      )}
    </>
  );
}
