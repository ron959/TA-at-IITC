console.log('main.js');

const getAllPosts = async () => {
    try {
      const response = await axios.get('https://api-playground-ten.vercel.app/posts');
      console.log('All posts:', response.data);
    } catch (error) {
      console.error('Error fetching posts:', error.response?.data || error.message);
    }
  };
  
getAllPosts();