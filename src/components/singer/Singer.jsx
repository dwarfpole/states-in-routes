import { useContext, useEffect } from "react";
import SingerContext from "../../context/singer/singerContext";

const Singer = ({ match }) => {
  const singerContext = useContext(SingerContext);

  const { name, loading, getSinger, setLoading } = singerContext;

  useEffect(() => {
    console.log("foo");
    setLoading();
    getSinger();
    // eslint-disable-next-line
  }, []);

  if (loading) return <p>fetching</p>;
  return <h3>{name}</h3>;
};

export default Singer;
