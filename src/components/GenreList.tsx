import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      {data.map(genre => (
        <div key={genre.id}>{genre.name}</div>
      ))}
    </>
  );
};

export default GenreList;
