export const generateUrl = path => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  return path ? imageUrl + path : 'https://i.postimg.cc/L8fCW6RZ/repetajpg.jpg';
};
