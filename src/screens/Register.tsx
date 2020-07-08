import * as React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

export interface RegisterProps {}

const Register: React.SFC<RegisterProps> = () => {
  const handleRegister = () => {
    console.log('submit registerring in...')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Register Screen</Text>
      <Button onPress={handleRegister}>
        Submit
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Register };
