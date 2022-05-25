import { Container } from "@mantine/core";
import React from "react";
import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";

const Home = () => {
   return (
      <>
         <Container>
            <Banner />
            <Products />
            <BusinessSummary />
            <Reviews />
         </Container>
         <Footer />
      </>
   );
};

export default Home;
