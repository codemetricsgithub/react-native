import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

const Scrollviews = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, culpa
          ipsum expedita vitae delectus corrupti debitis, accusamus dolor totam
          aspernatur, officia molestias illo suscipit doloribus eaque? Molestiae
          exercitationem cupiditate nostrum? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Placeat voluptatem vel odit numquam, qui
          pariatur reprehenderit odio quaerat autem et ab eligendi, temporibus
          fugit rem quas error ducimus iure? Maxime! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus veniam ipsum alias
          maiores doloribus! Consectetur architecto dicta illum laborum adipisci
          quasi odit ullam molestiae! Illum quae vero aliquam tempore
          voluptatum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Velit tenetur sapiente excepturi neque, nihil assumenda natus itaque!
          Explicabo natus cupiditate sed ullam adipisci. Magnam porro ipsum
          expedita ipsa veritatis! Velit? Lorem ipsum utem et ab eligendi,
          temporibus fugit rem quas error ducimus iure? Maxime! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus!
          Consectetur
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Scrollviews;

const styles = StyleSheet.create({
  container: {
    flex: 12,
    //jitna height hain utna hi scroll  bar kam aaayega isiliye  status bar ke sath use  kiya  gya aur uper niche se  chipkega nhi
    paddingTop: StatusBar.currentHeight,
    // backgroundColor: 'green',
  },
  scrollview: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
});

// pass important props like <Text contentContainerStyle={true or false}/>
