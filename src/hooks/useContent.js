import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_CONTENT } from '../graphql/queries';

const useContent = () => {

  const { loading, error, data } = useQuery(CURRENT_CONTENT);
  const [currentContent, setCurrentContent] = useState({
    PricingData: null,
    HomeData: null,
    FooterData: null
  });

  useEffect(() => {
    if (data) {
      setCurrentContent({
        PricingData: data.showCurrentContent.find(results => results.value === "Pricing"),
        HomeData: data.showCurrentContent.find(results => results.value === "Home"),
        FooterData: data.showCurrentContent.find(results => results.value === "Footer"),
      });
    };
  }, [data]);

  return {
    currentContent,
    loadingContent: loading
  };
};

export default useContent;
