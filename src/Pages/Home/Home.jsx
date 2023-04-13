import React, { useEffect, useState } from "react";
import Banner from "/src/component/Banner";
import { useLoaderData, useNavigation } from "react-router-dom";
import SingleProduct from "/src/component/FeatureJob";
import Category from "/src/Pages/Category/Catagory";

const Home = () => {
  const data = useLoaderData();
  console.log(data)
  const [products, setProducts] = useState(data);
  const [showAll, setShowAll] = useState(false);
  
  const navigation = useNavigation()
  console.log(navigation.state)
  if (navigation.state === 'loading') {
    return <LoadingSpinner />
  }

  return (
    <div>
      <Banner />
      <Category/>
      <div className='container mx-auto'>
      <h2 className='text-5xl font-semibold text-center m-8'>Featured Jobs</h2>
      <h2 className='text-xl text-center m-3'>
        Explore thousands of job opportunities with all the information you need. It's your future
      </h2>

        {/* foods sections */}

        <div className="container mx-auto grid md:grid-cols-2 gap-4 m-8 grid-rows-1">
  {showAll
    ? products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))
    : products.slice(0, 4).map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
</div>

        <div className="text-center">
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-2 hover:bg-pink-400 text-white text-xl font-semibold p-2 rounded-lg bg-pink-500"
            >
              Show All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
