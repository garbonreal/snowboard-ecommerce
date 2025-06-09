import { MessageDisplay } from '@/components/common';
import { ProductShowcaseGrid } from '@/components/product';
import { useDocumentTitle, useFeaturedProducts, useScrollTop } from '@/hooks';
import bannerImg from '@/images/banner-guy.jpg';
import React from 'react';

const FeaturedProducts = () => {
  useDocumentTitle('Featured Products');
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading,
    error
  } = useFeaturedProducts();

  return (
    <main className="content">
      <div className="featured">
        <div className="banner-2">
          <div className="banner-img-2">
            <img src={bannerImg} alt="" />
            <div className="banner-desc-2">
              <h1>Featured Products</h1>
            </div>
          </div>
        </div>
        <div className="display">
          <div className="product-display-grid">
            {(error && !isLoading) ? (
              <MessageDisplay
                message={error}
                action={fetchFeaturedProducts}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={featuredProducts}
                skeletonCount={10}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProducts;
