const GOOGLE_API_KEY = 'AIzaSyCTYxuWPQpt7f4r45W7f2ol4U6wu1g4mDk';

function getMap(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&
  markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return url;
}
export default getMap;
