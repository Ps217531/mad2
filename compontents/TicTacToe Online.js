import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Pressable,
    Alert,
} from "react-native";
import bg from "../assets/background.png";
import Cell from "../src/components/Cell";
const emptyMap = [
    ["", "", ""], // 1st row
    ["", "", ""], // 2nd row
    ["", "", ""], // 3rd row
];

const TicTacToe = () => {
    const [map, setMap] = useState(emptyMap);
    const [currentTurn, setCurrentTurn] = useState("x");

    const onPress = (rowIndex, columIndex) => {
        console.log("Mow", "Row:", rowIndex, "Col:", columIndex);
        if (map[rowIndex][columIndex] !== "") {
            Alert.alert("Position already occupied");
            return;
        }
        setMap((existingMap) => {
            const updateMap = [...existingMap];
            updateMap[rowIndex][columIndex] = currentTurn;
            return updateMap;
        });
        setCurrentTurn(currentTurn == "x" ? "o" : "x");

        const winner = getWinner();
        if (winner) {
            gameWon(winner);
        } else {
            checkTieState();
        }
    };

    const getWinner = () => {
        // Check rows
        for (let i = 0; i < 3; i++) {
            const isRowXWinning = map[i].every((cell) => cell == "x");
            const isRowOWinning = map[i].every((cell) => cell == "o");

            if (isRowXWinning) {
                return "x";
            }
            if (isRowOWinning) {
                return "o";
            }
        }
        // Check  columns
        for (let col = 0; col < 3; col++) {
            let isColumnXWinner = true;
            let isColumnOWinner = true;

            for (let row = 0; row < 3; row++) {
                if (map[row][col] !== "x") {
                    isColumnXWinner = false;
                }
                if (map[row][col] !== "o") {
                    isColumnOWinner = false;
                }
            }
            if (isColumnXWinner) {
                return "x";
                break;
            }
            if (isColumnOWinner) {
                return "o";
                break;
            }
        }
        // Check diagonals
        let isDiagonal1OWinning = true;
        let isDiagonal1XWinning = true;
        let isDiagonal2OWinning = true;
        let isDiagonal2XWinning = true;

        for (let i = 0; i < 3; i++) {
            if (map[i][i] !== "o") {
                isDiagonal1OWinning = false;
            }
            if (map[i][i] !== "x") {
                isDiagonal1XWinning = false;
            }
            if (map[i][2 - i] !== "o") {
                isDiagonal2OWinning = false;
            }
            if (map[i][2 - i] !== "x") {
                isDiagonal2XWinning = false;
            }
        }
        if (isDiagonal1OWinning || isDiagonal2OWinning) {
            return "o";
        }
        if (isDiagonal1XWinning || isDiagonal2XWinning) {
            return "x";
        }
    };

    const checkTieState = () => {
        if (!map.some((row) => row.some((cell) => cell == ""))) {
            Alert.alert("It`s a tie", `tie`, [
                {
                    text: "Restart",
                    onPress: resetGame,
                },
            ]);
        }
    };

    const gameWon = (player) => {
        Alert.alert("Huraaay", `Player ${player} won`, [
            {
                text: "Restart",
                onPress: resetGame,
            },
        ]);
    };

    const resetGame = () => {
        console.log("Reset game");
        setMap([
            ["", "", ""], // 1st row
            ["", "", ""], // 2nd row
            ["", "", ""], // 3rd row
        ]);
        setCurrentTurn("x");
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
                <Text
                    style={{
                        fontSize: 24,
                        color: "black",
                        position: 'absolute',
                        top: 50,
                    }}
                >
                    Current Turn: {currentTurn.toUpperCase()}
                </Text>
                <View style={styles.map}>
                    {map.map((row, rowIndex) => (
                        <View key={`row-${rowIndex}`} style={styles.row}>
                            {row.map((cell, columIndex) => (
                                <Cell
                                    key={`row-${rowIndex}-col-${columIndex}`}
                                    cell={cell}
                                    onPress={() => onPress(rowIndex, columIndex)} />
                            ))}
                        </View>
                    ))}
                </View>
            </ImageBackground>

            <StatusBar style="auto" />
        </View>
    );
}

export default TicTacToe;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F7F7F7",
    },
    bg: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: "76%",
        aspectRatio: 1,
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },



});