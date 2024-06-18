import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import style from './style';
const Profile = () => {
  return (
    <View style={style.cardContainer}>
      <View style={style.header}>
        <View>
          <Image
            style={style.image}
            source={{ uri: 'https://i.pravatar.cc/300' }}
          />
        </View>
        <View style={style.texts}>
          <Text style={style.text}>Hi,I'm Jim</Text>
          <Text>
            I'm learning react native couse, I want to develop a social app.
          </Text>
        </View>
      </View>
      <View style={style.social}>
        <TouchableOpacity style={style.btn}>
          <FontAwesome name='twitter-square' size={24} color='#1DA1F2' />
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <FontAwesome name='linkedin' size={24} color='#0A66C2' />
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <FontAwesome name='github-square' size={24} color='#333' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
