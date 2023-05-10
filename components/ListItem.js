import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



const ListItem = ({item, deleteItem}) => {
    return (
      <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemView}>
              <Text style={styles.listItemText} onPress={() => deleteItem(item.id)}>{item.text}</Text>
          </View>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
      color: '#000',
      flexDirection: 'row',
      alignItems: 'center'
    },
    listItemText: {
      color: '#000',
    }
  });


export default ListItem;