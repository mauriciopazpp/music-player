import { useRouter } from "next/router";

export default function ArtistPage() {
    const router = useRouter();
    const { id } = router.query;

    return <h1>Artista ID: {id}</h1>;
}
