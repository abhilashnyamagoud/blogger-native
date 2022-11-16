/* eslint-disable prettier/prettier */
import React,{useEffect} from 'react';
import {View,Alert,FlatList,StyleSheet} from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import Cards from '../../Components/Cards';
import { getAllBlog, AllBlogs } from '../../store/slices/blogSlice';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const blogSelect = useSelector(AllBlogs);

  useEffect(()=>{
      axios.get('http://10.0.51.91:3088/blogs')
      .then((res)=>{
        const result = res.data;
        dispatch(getAllBlog(result));
        console.log(result);
      })
      .catch((err)=>{
        console.log(err);
        Alert.alert(err.message);
      });
  },[dispatch]);

  const renderItem = ({item})=>{
      return <Cards title={item.title} body={item.body} />
  };
  return (
    <View style={styles.container}>
      {/* <IconButton icon="sad-outline" size={30}  /> */}
      <Button onPress={()=>navigation.navigate('BlogForm')} style={styles.icons}  ><Ionicons name="ios-add-circle" size={40}  /> </Button>

      <TextInput label="search" mode="outlined" placeholder="Search By Title" activeOutlineColor="black" style={styles.search} />

      <FlatList
        data={blogSelect}
          renderItem={renderItem}
          keyExtractor={(item)=>item._id}
        />
    </View>
  );
};

const styles = StyleSheet.create({
   container:{
    margin:20,
   },
   search:{
    marginBottom:5,
   },
   icons:{
    flexDirection:'row',
    justifyContent:'flex-end'
   }
});

export default Home;
