export default (min = 1, max = 101) => {
	  return Math.floor(min + Math.random() * (max + 1 - min));
};
