const BASE_ROUTE = './assets/images/';

export const LOCAL_IMAGES = {
  personal_site_v1: 'personal-site-v1.PNG',
  personal_site_v2: 'personal-site-v2.PNG',
  personal_pic_1: 'food.jpg',
  personal_pic_2: 'broadway.jpg',
  personal_pic_3: 'boat.jpg',
  personal_pic_4: 'prague.jpg',
  personal_pic_5: 'munich.jpg',
};

// This is pure laziness- add the base route to each url
Object.keys(LOCAL_IMAGES).forEach(key => {
  LOCAL_IMAGES[key] = BASE_ROUTE + LOCAL_IMAGES[key];
});
