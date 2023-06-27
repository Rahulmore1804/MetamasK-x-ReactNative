
import { View, Text, Button } from 'react-native';
import React from 'react';
import MetaMaskSDK from '@metamask/sdk';
import { Linking } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

export default function MM() {
  const call = async () => {
    const MMSDK = new MetaMaskSDK({
      openDeeplink: (link) => {
        Linking.openURL(link); // Use React Native Linking method or another way of opening deeplinks.
      },
      timer: BackgroundTimer, // To keep the dapp alive once it goes to background.
      dappMetadata: {
        name: 'My dapp', // The name of your dapp.
        url: 'https://mydapp.com', // The URL of your website.
      },
    });

    const ethereum = MMSDK.getProvider();

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  };
  return (
    <View>
      <Text>MM</Text>
      <Button title="connect metmask" onPress={() => call()} />
    </View>
  );
}
// Error: Unable to resolve module crypto from D:\React native\metam2\node_modules\@metamask\sdk\dist\react-native\es\metamask-sdk.js: crypto could not be found within the project or in these directories:
// node_modules\@metamask\sdk\node_modules
// node_modules
// > 1 | import e,{Buffer as t}from"buffer";import n from"crypto";import r from"events";import i,{Duplex as s}from"stream";import o
