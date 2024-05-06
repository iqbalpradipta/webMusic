import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ListAlbums from '../mocks/ListAlbums.json'

function ListAlbum() {

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '80%', padding: 5 }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {ListAlbums.map((data) => (
            <SwiperSlide style={{ width: '200px', margin: 'auto', display: 'flex', justifyContent: 'center'}}>
              <Box
                sx={{
                  width: '80%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  sx={{
                    border: '1px solid',
                    borderColor: '#3D3D3D',
                    boxShadow: 3,
                    borderRadius: '10px',
                  }}
                  alt={data.alt}
                  src={data.src}
                />
                <Box sx={{ color: 'black', fontWeight: 'bold' ,display: 'flex', justifyContent: 'center', mt: '10px'}}>{data.alt}</Box>
                <Box sx={{ color: 'gray', display: 'flex', justifyContent: 'center', mb: 4 }}>{data.tittle}</Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export default ListAlbum;