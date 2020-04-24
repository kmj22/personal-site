const BASE_ROUTE = 'assets/images/';

export const LOCAL = {
  gameplay: 'ehd-gameplay.gif'
};

// This is pure laziness- add the base route to each url
Object.keys(LOCAL).forEach(key => {
  LOCAL[key] = BASE_ROUTE + LOCAL[key];
});

export const LOCAL_IMAGES = {
  personal_site_v1: 'https://i.imgur.com/iFRM4p5.png',
  personal_site_v2: 'https://i.imgur.com/48GDl9V.png',
  me: 'https://i.imgur.com/tMrpa1J.jpg',
  food: 'https://i.imgur.com/ENuxKzm.jpg',
  broadway: 'https://i.imgur.com/BiJ2mjF.jpg',
  boat: 'https://i.imgur.com/g1CJJ0Z.jpg',
  prague: 'https://i.imgur.com/37zgwty.jpg',
  munich: 'https://i.imgur.com/HraPKDG.jpg',
  appalachian: 'https://i.imgur.com/5B9RWw4.jpg',
  etail: 'https://i.imgur.com/MHrbxH9.jpg',
  gap_banner: 'https://i.imgur.com/Q73KTIK.jpg',
  hike: 'https://i.imgur.com/xCSgMYs.jpg',
  crepe: 'https://i.imgur.com/A5nMXIH.jpg',
  junk_art: 'https://i.imgur.com/UFkaBRG.jpg',
  paint: 'https://i.imgur.com/PJrGcuR.jpg',
  plane: 'https://i.imgur.com/TBdk0V9.jpg',
  triumph: 'https://i.imgur.com/qSc9zVR.jpg',
  ...LOCAL
};
