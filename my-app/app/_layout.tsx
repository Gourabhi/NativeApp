import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "..//global.css";

const properties = [
  { id: "1", title: "Grocey", city: "Bhopal", price: "₹ 1000" },
  { id: "2", title: "Fruits", city: "Indore", price: "₹ 2000cr" },
  { id: "3", title: "HelathProduct", city: "Mumbai", price: "₹ 3000cr" },
];

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 10 }}>
        <Text>Welcome to Groxifi! and Subscribe this channel</Text>
        <TextInput
          placeholder="Enter your city"
          placeholderTextColor="#999"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            padding: 10,
            marginTop: 12,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            alert("Search button pressed!");
          }}
          style={{
            backgroundColor: "#2563eb",
            padding: 12,
            borderRadius: 8,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              borderRadius: 10,
              marginBottom: 12,
              backgroundColor: "#f9f9f9",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.city}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

