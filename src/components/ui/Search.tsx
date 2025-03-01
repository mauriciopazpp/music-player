"use client";
import { useState, useEffect } from "react";
import useDebounce from "@/lib/hooks/useDebounce";
import { fetchArtistByName } from "@/lib/api/theaudiodb/fetchArtistByName";
import { ArtistDBaudio } from "@/types/Artist";
import { SearchInput } from "../common/SearchInput";
import { ArtistList } from "./ArtistList";

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
          console.error("Error getting the artist:", error);
          setArtists([]);
        }
      } else {
        setArtists([]);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
      {artists.length > 0 && <ArtistList artists={artists} />}
    </div>
  );
}
