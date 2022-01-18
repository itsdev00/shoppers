import React ,{useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
    TouchableOpacity,VirtualizedList,
  } from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {height} = Dimensions.get('window');
import cloths from "../../consts/cloths";
import CartScreen from './CartScreen';
import { VirtualizedListCellContextProvider } from 'react-native/Libraries/Lists/VirtualizedListContext';
const width = Dimensions.get('window').width / 2 - 30;



const clothCategories = [
  {name: 'SHIRTS', icon: 'ladybug'},
  {name: 'SHOES', icon: 'face'},
  {name: 'EYE WEAR', icon: 'ladybug'},
  {name: 'JEANS', icon: 'face'},
];

const Card = ({cloth, navigation}) => {
  return (
    <TouchableOpacity  activeOpacity={0.8}>
      <View style={style.cardContainer}>
      <View style={style.cardImageContainer}>
          <Image
            source={cloth.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={style.cardDetailsContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontWeight: 'bold', color: COLORS.dark, fontSize: 20}}>
              {cloth?.name}
            </Text>
            <Text>+</Text>
           
          </View>
          </View>
      </View>
    </TouchableOpacity>
  )};


const HomeScreen = ({navigation}) => {
  const [selectedCategoryIndex, setSeletedCategoryIndex] = useState(0);
  const [filteredCloths, setFilteredCloths] = useState([]);

  const fliterCloth = index => {
    const currentCloths = cloths.filter(
      item => item?.cloth?.toUpperCase() == clothCategories[index].name,
    )[0]?.cloths;
    
    setFilteredCloths(currentCloths);
  };



    return (
    <SafeAreaView style={{backgroundColor:COLORS.white,flex:1}}>
      <View style={style.header}>
        <Icon name="sort-variant" size={28} color={COLORS.primary}  />
        <TouchableOpacity onPress={()=>navigation.navigate('CartScreen')}>
        <Icon name="cart-outline" size={28} color={COLORS.primary}
         />
        </TouchableOpacity>
      </View>
      
      <Text style={style.headerTitle}>Amazing cloths for you !</Text>
     
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.mainContainer}>
        <View style={style.searchInputContainer}>
        <Icon name="magnify" size={24} color={COLORS.grey}/>
        <TextInput
              placeholderTextColor={COLORS.redlight}
              placeholder="Go for best cloths"
              style={{flex: 1}}
            />
        <Icon name="sort-ascending" size={24} color={COLORS.grey} />
        </View>
     
     

        <View  style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
               {clothCategories.map((item, index) => (
              <View key={'cloth' + index} style={{alignItems: 'center'}}>
                <TouchableOpacity
                 onPress={() => {
                    setSeletedCategoryIndex(index);
                    fliterCloth(index)
                  }}  style={[
                    style.categoryBtn,
                    {
                      backgroundColor:
                        selectedCategoryIndex == index
                          ? COLORS.yellow
                          : COLORS.white,},
                  ]}>
                   <Icon
                    name={item.icon} size={30}  color={  selectedCategoryIndex == index ? COLORS.primary: COLORS.red} 
                    />
                </TouchableOpacity>
                <Text style={style.categoryBtnName}>{item.name}</Text>
              </View>
            ))}
            </View>
           

            <View  style={{marginTop: 20}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={filteredCloths}
                renderItem={({item}) => (
                  <Card cloth={item} navigation={navigation} />
                )}
              />
            </View>
        </View>  
      </ScrollView>
    </SafeAreaView>
    )
}
const style=StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },
      headerTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        width: '55%',
        lineHeight: 30,
        paddingHorizontal: 20,
        color:COLORS.red,
        marginBottom:3,

      },
      mainContainer: {
        flex: 1,
        backgroundColor: COLORS.screen,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 40,
        minHeight: height,
      },
      searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 7,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
      },
      categoryBtn: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor:COLORS.red,
      },
      categoryBtnName: {
        color: COLORS.dark,
        fontSize: 15,
        marginTop: 5,
        fontWeight: 'bold',
      },
      cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      cardImageContainer: {
        height: 100,
        width: 140,
        backgroundColor: COLORS.white,
        borderRadius: 20,
      },
      cardDetailsContainer: {
        height: 120,
        backgroundColor: COLORS.yellow,
        flex: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 20,
        justifyContent: 'center',
      },
     
});
export default HomeScreen









