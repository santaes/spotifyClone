import * as React from 'react';
import { StyleSheet,Text,View,FlatList, } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../assets/data/albumCategories';

import { API, graphqlOperation } from 'aws-amplify';
import { listAlbumCategories} from '../src/graphql/queries';
import { useEffect,useState } from 'react';




export default function HomeScreen() {

  const [categories, setCategories] = useState([]);

  useEffect( () => {

    const fetchAlbumCategories = async () =>{
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategories));
        setCategories(data.data.listAlbumCategories.items);
      } catch (e) {
        console.log(e);
      }
    }

    fetchAlbumCategories();

  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={categories}
        renderItem={({ item }) => ( 
          <AlbumCategory 
            title={item.title} 
            albums={item.albums.items}         
          />
          
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
