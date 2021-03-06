import { Carousel } from 'react-carousel-minimal';
import Card from './Card';
import './Home.css';

export default function Home() {
  const data = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/85/Yasujiro_Ozu_01.jpg',
      caption: 'Yasujirō Ozu',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Akirakurosawa-onthesetof7samurai-1953-page88.jpg/440px-Akirakurosawa-onthesetof7samurai-1953-page88.jpg',
      caption: 'Akira Kurosawa',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/d7/Kenji_Mizoguchi_1.jpg',
      caption: 'Kenji Mizoguchi',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kinuyo_Tanaka_in_Jinsei_no_onimotsu_1935.jpg/520px-Kinuyo_Tanaka_in_Jinsei_no_onimotsu_1935.jpg',
      caption: 'Kinuyo Tanaka',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Masaki_Kobayashi.jpg/440px-Masaki_Kobayashi.jpg',
      caption: 'Masaki Kobayashi',
    },
    {
      image:
        'https://www.lemagducine.fr/wp-content/uploads/2016/01/Kon-Ichikawa-film-documentaire-Tokyo-Olympiades-critique-cinema.jpg',
      caption: 'Kon Ichikawa',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Nagisa_Oshima_at_Cannes_in_2000.jpg',
      caption: 'Nagisa Ōshima',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/TakeshiKitano.jpg/520px-TakeshiKitano.jpg',
      caption: 'Takeshi Kitano',
    },
    {
      image:
        'https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/medias/2009/12/media_50014/un-cineaste-au-fond-des-yeux-20-kiyoshi-kurosawa%2CM30327.jpg?itok=_nbaoA_o',
      caption: 'Kiyoshi Kurosawa',
    },
    {
      image:
        'https://www.darksidereviews.com/wp-content/uploads/2010/02/sonosion-680x340.jpg',
      caption: 'Sono Sion',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/8c/Hirokazu_Kore-eda_Cannes_2015.jpg',
      caption: 'Hirokazu Kore-eda',
    },
    {
      image:
        'https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2018.2F04.2F13.2F0c9406af-df9c-4c0f-a25b-cadb60e58606.2Ejpeg/340x340/quality/80/focus-point/1580%2C1075/ryusuke-hamaguchi.jpg',
      caption: 'Ryūsuke Hamaguchi',
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };

  return (
    <div className='Home'>
      <div style={{ textAlign: 'center' }}>
        <h2>Le cinéma japonais</h2>
        <br />
        <p>
          Le cinéma japonais a une histoire qui date des débuts du cinéma. C'est
          actuellement le troisième cinéma
          <br />
          mondial pour le nombre de films produits derrière le cinéma indien et
          le cinéma chinois.
        </p>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width='1350px'
            height='600px'
            captionStyle={captionStyle}
            radius='10px'
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition='bottom'
            automatic={true}
            dots={true}
            pauseIconColor='white'
            pauseIconSize='40px'
            slideBackgroundColor='darkgrey'
            slideImageFit='cover'
            thumbnails={true}
            thumbnailWidth='100px'
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: '500px',
              margin: '40px auto',
            }}
          />
        </div>
        <div className='text'>Sur ce site vous pouvez consulter</div>
        <Card />
      </div>
    </div>
  );
}
