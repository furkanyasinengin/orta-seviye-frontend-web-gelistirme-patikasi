import axios from "axios";

const getData = async (userID = 1) => {
  const user = await axios(
    `https://jsonplaceholder.typicode.com/users/${userID}`,
    {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    }
  );

  const posts = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userID}`,
    {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    }
  );

  user.data["posts"] = posts.data;

  return user.data;
};

export default getData;
