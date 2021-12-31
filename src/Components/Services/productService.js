export const ProductInfo = async () => {
  try {
    const res = await fetch("https://assessment-edvora.herokuapp.com");
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.log(res.status, "status");
      return res.status;
    }
  } catch (error) {
    console.log(error);
  }
};
