import React from 'react';
import { Image, View } from 'react-native';
import { Subheading, Paragraph } from 'react-native-paper';
import { styles } from './styles';

export interface Props {
  name: string;
  image?: string;
  title: string;
  price: number;
}

const ProductItem: React.SFC<Props> = ()=> {
  return (
    <View style={styles.content}>
      <View style={styles.image}>
        <Image
          source={require('../../assets/product.png')}
        />
      </View>
      <View style={styles.description}>
        <Subheading style={styles.title}>Sample Product</Subheading>
        <Paragraph style={styles.price}>PHP 3,000</Paragraph>
      </View>
    </View>
  );
};

export { ProductItem };
