const BASE_ROUTE = './assets/images/';

export const LOCAL_IMAGES = {
  personal_site_v1: 'personal-site-v1.PNG',
  personal_site_v2: 'personal-site-v2.PNG',
  food: 'food.jpg',
  broadway: 'broadway.jpg',
  boat: 'boat.jpg',
  prague: 'prague.jpg',
  munich: 'munich.jpg',
  appalachian: 'appalachian.jpg',
  etail: 'etaileast.jpg',
  gap_banner: 'gapbanner.jpg',
  hike: 'hike.jpg',
  crepe: 'crepe.jpg',
  junk_art: 'junkart.jpg',
  paint: 'paint.jpg',
  plane: 'plane.jpg',
  triumph: 'triumph.jpg',
  gameplay: 'ehd-gameplay.gif',
};

// This is pure laziness- add the base route to each url
Object.keys(LOCAL_IMAGES).forEach(key => {
  LOCAL_IMAGES[key] = BASE_ROUTE + LOCAL_IMAGES[key];
});
