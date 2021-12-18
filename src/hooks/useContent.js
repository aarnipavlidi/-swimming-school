import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_CONTENT } from '../graphql/queries';

const useContent = () => {

  const { loading, error, data } = useQuery(CURRENT_CONTENT);
  const [currentContent, setCurrentContent] = useState({
    PricingData: null
  });

  useEffect(() => {
    if (data) {
      setCurrentContent({ ...currentContent, PricingData: data.showCurrentContent.find(results => results.value === "Pricing")})
    }
  }, [data]);

  return {
    currentContent,
    loadingContent: loading
  };
};

export default useContent;
