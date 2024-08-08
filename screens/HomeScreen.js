import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Icon from "react-native-vector-icons/FontAwesome";

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      data: [0, 0, 0, 0, 0, 0, 3000000, 1265000, 0, 0, 0, 0, 0],
      color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
      strokeWidth: 2,
    },
    {
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  propsForDots: {
    r: "4",
    strokeWidth: "2",
    stroke: "#ffa726",
  },
  decimalPlaces: 0, // Ensure no decimals in Y-axis values
  style: {
    borderRadius: 16,
  },
};

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>
      <View style={styles.line}></View>
      <View style={styles.dateContainer}>
        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>ເລີ່ມວັນທີ</Text>
          <Text style={styles.dateValue}>26/06/2024</Text>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>ຫາ</Text>
          <Text style={styles.dateValue}>26/07/2024</Text>
        </View>
      </View>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryLabel}>ລາຍຮັບ</Text>
          <Text style={styles.summaryValue}>3,000,000</Text>
        </View>
        <View style={styles.summaryBox1}>
          <Text style={styles.summaryLabel}>ລາຍຈ່າຍ</Text>
          <Text style={styles.summaryValue}>1,365,000</Text>
        </View>
        <View style={styles.summaryBox2}>
          <Text style={styles.summaryLabel}>ຍອດຄົງເຫຼືອ</Text>
          <Text style={styles.summaryValue}>1,635,000</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <ScrollView style={styles.transactionsContainer}>
        <View style={styles.transaction}>
          <Icon
            style={styles.transactionIcon}
            name="glass"
            size={30}
            color="red"
          />
          <View style={styles.transactionDateContainer}>
            <Text style={styles.transactionName}>Beer friends</Text>
            <Text style={styles.transactionDate}>21/07/2024 07:07 AM</Text>
          </View>
          <Text style={styles.transactionAmountNegative}>-235,000</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.transaction}>
          <Icon
            style={styles.transactionIcon1}
            name="glass"
            size={30}
            color="green"
          />
          <View style={styles.transactionDateContainer}>
            <Text style={styles.transactionName}>Rocket</Text>
            <Text style={styles.transactionDate}>13/07/2024 12:56 AM</Text>
          </View>
          <Text style={styles.transactionAmountPositive}>+3,000,000</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  chartContainer: {
    padding: 10,
  },
  chart: {
    marginVertical: 10,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#BCC6CC",
    marginVertical: 20,
    width: "100%",
    alignSelf: "center",
  },
  dateBox: {
    alignItems: "center",
    backgroundColor: "#888",
    padding: 10,
    borderRadius: 5,
  },
  dateLabel: {
    color: "#fff",
    fontWeight: "bold",
  },
  dateValue: {
    color: "#000",
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  summaryBox: {
    alignItems: "center",
    backgroundColor: "#7FFFD4",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  summaryBox1: {
    alignItems: "center",
    backgroundColor: "#F89880",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  summaryBox2: {
    alignItems: "center",
    backgroundColor: "#AFEEEE",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  transactionIcon: {
    backgroundColor: "#F89880",
    borderRadius: 60,
    padding: 10,
  },
  transactionIcon1: {
    backgroundColor: "#7FFFD4",
    borderRadius: 60,
    padding: 10,
  },
  summaryLabel: {
    color: "#888",
  },
  summaryValue: {
    color: "#000",
  },
  transactionsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    maxHeight: 200, // Limit the height to make it scrollable
  },
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  transactionDateContainer: {
    flexDirection: "column",
  },
  transactionName: {
    color: "#fff",
  },
  transactionDate: {
    color: "#888",
  },
  transactionAmountNegative: {
    color: "red",
  },
  transactionAmountPositive: {
    color: "green",
  },
});

export default HomeScreen;
