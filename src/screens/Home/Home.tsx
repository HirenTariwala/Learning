import * as React from 'react';
import { ScrollView } from 'react-native';
import { HomeProps } from './Interface/HomeProps';
import { styles } from './style/HomeStyle';
import Card from '../../components/Card/Card';

const Home = (props: HomeProps) => {
  const [memesList] = React.useState([
    {
      type: 1,
      memesUri:
        'http://duffy.agency/wp-content/uploads/2019/05/example-of-Dos-Equis-meme.png',
      user: {
        name: 'Kiersten Lange',
        profilePic: 'https://randomuser.me/api/portraits/women/79.jpg',
      },
    },
    {
      type: 2,
      memesUri:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      user: {
        name: 'Grace Gross',
        profilePic: 'https://randomuser.me/api/portraits/women/63.jpg',
      },
    },
  ]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {memesList.map((meme, index) => (
        <Card
          key={index}
          type={meme.type}
          memesUri={meme.memesUri}
          user={meme.user}
        />
      ))}
    </ScrollView>
  );
};

export default Home;
