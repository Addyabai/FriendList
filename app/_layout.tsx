import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Friend List' }} />
      <Stack.Screen name="friendDetails/[id]" options={{ title: 'Friend Details' }} />
    </Stack>
  );
}
