import * as React from 'react';
import { View, Text } from 'react-native';

export interface Props {}

const Profile: React.SFC<Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

export { Profile };
