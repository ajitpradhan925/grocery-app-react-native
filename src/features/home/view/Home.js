import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import LocationHeader from '@components/LocationHeader';
import HomeSearchBar from '@components/HomeSearchBar';
import MainWrapper from '@components/MainWrapper';
import { moderateScale } from 'react-native-size-matters';
import OfferSlider from '../components/OfferSlider';
import ViewAllWrapper from '@components/ViewAllWrapper';
import ProductCard from '@components/ProductCard';
import CategorySlider from '../components/CategorySlider';

const Home = () => {
  return (
    <MainWrapper>
      <View>
        <LocationHeader />
      </View>

      <View style={{ marginTop: moderateScale(15) }}>
        <HomeSearchBar />
      </View>


      <View style={{ marginTop: moderateScale(20) }}>
        <CategorySlider />
      </View>

      <View style={{ marginTop: moderateScale(20) }}>
        <OfferSlider />
      </View>

      <View style={{ marginTop: moderateScale(20) }}>
        <ViewAllWrapper>
          <ProductCard />
        </ViewAllWrapper>
      </View>

    </MainWrapper>
  )
}

export default Home;