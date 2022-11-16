/* eslint-disable prettier/prettier */
import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Card, Title, Paragraph,Button} from 'react-native-paper';

const Cards = ({title,body}) => {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        {/* <Card.Title title="Blog" subtitle="subtitle" /> */}
        <Card.Content>
          <Title>{title} </Title>
          <Paragraph>{body}</Paragraph>
        </Card.Content>
        <Card.Actions>
      <Button >Read More</Button>
    </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer:{
    marginVertical:5,
  },
  card:{
    backgroundColor:'#fff',
    borderRadius:10,
    padding:10,
  },
}); 

export default Cards;
