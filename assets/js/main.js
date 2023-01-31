TweenMax.staggerFrom(".selects ul li" , 1, {
  opacity:0,
  x: -20,
  ease: Expo.ease
}, .5);
// TweenMax.staggerFrom(".animated" , 2, {
//   opacity:0,
//   x: -20,
//   ease: Expo.ease
// }, .5);
TweenMax.staggerFrom(".text" , 1, {
  delay: 2,
  opacity: 0,
  ease: Expo.ease
});
TweenMax.staggerFrom(".lineText span" , 1, {
  delay: 3,
  opacity:0,
  x: -20,
  ease: Expo.ease
}, .5);
TweenMax.staggerFrom(".shoes2 .circleImg" , 1, {
  delay: 5,
  opacity:0,
  x: 20,
  ease: Expo.ease
}, .5);