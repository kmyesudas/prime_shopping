import React, { Component } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

export default class App extends Component {
  render() {
    const runFirst = `
      window.isNativeApp = true;
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri: "https://myshopprime.com/collection/mcytdjf",
          }}
          injectedJavaScriptBeforeContentLoaded={runFirst}
        />
      </View>
    );
  }
}
