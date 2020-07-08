import * as React from 'react';
import { View, Text } from 'react-native';

const Splash: React.SFC<> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading...</Text>
    </View>
  );
}

export { Splash };
