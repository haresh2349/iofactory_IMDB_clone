import { Box } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import { getAllMovies } from "../Redux/AppReducer/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, movies } = useSelector(
    (store) => store.AppReducer
  );
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);
  return (
    <>
      <Navbar movies={movies} />
      <Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default Home;
