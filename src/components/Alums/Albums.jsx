import classes from "./Albums.module.css"
import {AlbumCard} from "./AlbumCard/AlbumCard.jsx";

import {useGetAlbumsQuery} from "../../api/albumsApi.tsx";

const Albums = () => {
    const { data, error, isLoading } = useGetAlbumsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred: {error.message}</div>;

    return (
        <div className={classes.albumHolder}>
            {data.map((el) => (
                <AlbumCard card={el} key={el.id} />
            ))}
        </div>
    );
};
export default Albums;
