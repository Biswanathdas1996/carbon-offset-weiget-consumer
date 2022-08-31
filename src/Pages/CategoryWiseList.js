import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";

import NftCard from "../components/shared/NFT-Card";
import IndicationTable from "../components/shared/IndicationTable";
// import PieChat from "../components/shared/PieChat";
import { _fetch, _account } from "../CONTRACT-ABI/connect";
import Loader from "../components/shared/Loader";
import { useParams } from "react-router-dom";
import { isAdmin } from "../utils/isAdmin";
import Alert from "@mui/material/Alert";
import Banner from "../components/Header/Banner";

export default function HomePage() {
  const [tokens, setToken] = useState([]);
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState(false);

  const { category } = useParams();

  useEffect(() => {
    fetchAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  async function fetchAllPosts() {
    await setToken([]);
    setLoading(true);
    const getAllToken = await _fetch("getCollection");
    const filterCollection = getAllToken?.filter(
      (data) =>
        data?.collection?.toLocaleLowerCase() === category?.toLocaleLowerCase()
    );
    await setToken(filterCollection);
    const account = await _account();
    setAccount(account);
    setLoading(false);
  }

  return (
    <>
      {isAdmin(account) && (
        <Alert severity="warning">Admin access enabled</Alert>
      )}
      <Banner project={category?.toUpperCase()}></Banner>

      <Container>
        <Box
          sx={{
            pt: 4,
            pb: 2,
          }}
        ></Box>
        <br />
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item xs={12} sm={12} md={8}>
            <Grid container spacing={2} style={{ width: "100%" }}>
              {tokens && tokens?.length > 0 ? (
                tokens?.map((item) => {
                  return (
                    <>
                      <NftCard tokenId={item?.token} />
                    </>
                  );
                })
              ) : loading ? (
                <Grid item xs={12} sm={12} md={12}>
                  <Loader count="5" xs={12} sm={6} md={2.4} />
                </Grid>
              ) : (
                <Grid item xs={12} sm={12} md={12}>
                  <h3 style={{ color: "black" }}>No NFT available</h3>
                </Grid>
              )}
            </Grid>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={4}>
            <PieChat />
          </Grid> */}
          <Grid item xs={12} sm={12} md={2}>
            <IndicationTable />
          </Grid>
        </Grid>

        <div style={{ marginTop: 50 }}></div>
      </Container>
    </>
  );
}
