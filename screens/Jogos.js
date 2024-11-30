import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';

// Cartões com porcentagens e valores decimais correspondentes
const cardsData = [
  { id: 1, value: '10%' },
  { id: 2, value: '0,10' },
  { id: 3, value: '20%' },
  { id: 4, value: '0,20' },
  { id: 5, value: '30%' },
  { id: 6, value: '0,30' },
  { id: 7, value: '10%' },
  { id: 8, value: '0,10' },
  { id: 9, value: '20%' },
  { id: 10, value: '0,20' },
  { id: 11, value: '30%' },
  { id: 12, value: '0,30' },
];

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const JogoScreen = () => {
  const [cards, setCards] = useState(shuffleArray(cardsData));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [initial, setInitial] = useState(true)

  useEffect(() => {
    if(initial == true) {
        setTimeout(() => setInitial(false), 2000)
    }
    if (flippedCards.length === 2) {
      // Verifica se o valor dos cartões virados combina
      if (flippedCards[0].value === flippedCards[1].value) {
        setMatchedCards((prev) => [...prev, flippedCards[0].id, flippedCards[1].id]);
      }
      setTimeout(() => setFlippedCards([]), 1000); // Reseta os cartões virados após 1 segundo
    }
  }, [flippedCards]);

  const handleCardPress = (card) => {
    // Impede que o jogador vire mais de dois cartões ao mesmo tempo e evita clicar em cartões já combinados
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card.id)) {
      setFlippedCards((prev) => [...prev, card]);
    }
  };

  const renderCard = ({ item }) => {
    const isFlipped = flippedCards.includes(item);
    const isMatched = matchedCards.includes(item.id);

    return (
      <TouchableOpacity
        style={[styles.card, isFlipped || isMatched ? styles.flipped : null]}
        onPress={() => handleCardPress(item)}
      >
        <Text style={styles.cardText}>{isFlipped || isMatched || initial ? item.value : '?'}</Text>
      </TouchableOpacity>
    );
  };

  const render = () => {
    if (matchedCards.length === cardsData.length) {
      Alert.alert('Parabéns!', 'Você completou o jogo!');
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={cards}
          numColumns={4}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCard}
        />
      </View>
    );
  };

  return render();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginTop: 50,
    width: 70,
    height: 70,
    margin: 7,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  flipped: {
    backgroundColor: '#2196F3',
  },
  cardText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default JogoScreen;
