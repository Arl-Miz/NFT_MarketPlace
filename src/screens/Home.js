import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#fafa",
          borderRadius: 100,
          width: 200,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={require("../assets/person03.png")}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image
          source={require("../assets/ethereum.png")}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ fontSize: 32 }}>149.64 Eth</Text>
      </View>
      <View>
        <Text style={{ fontSize: 32 }}></Text>
      </View>
      <View>
        <Text style={{ fontSize: 32 }}>Crasoul</Text>
      </View>
      <View>
        <Text style={{ fontSize: 32 }}>Hot Picks</Text>
      </View>
      <View>
        <Text style={{ fontSize: 32 }}>Trending</Text>
      </View>
      <View>
        <Text style={{ fontSize: 32 }}>Top Collections</Text>
      </View>
      <View>
        <Text style={{ fontSize: 32 }}>Top Categories</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
