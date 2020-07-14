import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Title, Subheading, Button } from 'react-native-paper';

import { styles } from './styles';

export interface Props {}

const StoreList: React.SFC<Props> = () => {
  const navigation = useNavigation();

  const handleViewStore = () => navigation.navigate('Product');

  return (
    <Card style={styles.content}>
      <Card.Content style={styles.innerContent}>
        <View style={styles.mainContent}>
          <Title>Ambers</Title>
          <Subheading>Manila, Philippines</Subheading>
          <Button onPress={handleViewStore}>Shop Now</Button>
        </View>
      </Card.Content>
    </Card>
  );
};

export { StoreList };