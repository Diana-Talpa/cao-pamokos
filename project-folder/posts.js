function loadScript(src) {
  const script = document.createElement('script')
  script.src = src;
  document.head.prepend(script);
}
loadScript('navigation.js')








async function fetchPostsAndComments() {
    try {

      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await postsResponse.json();

      
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await usersResponse.json();

      
      const commentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments');
      const comments = await commentsResponse.json();

     
      const postsContainer = document.getElementById('postsContainer');

      
      posts.forEach(post => {
        
        const author = users.find(user => user.id === post.userId);

        
        const commentCount = comments.filter(comment => comment.postId === post.id).length;

        
        const postElement = document.createElement('div');
        postElement.style.marginBottom = '20px';

        const postTitleLink = document.createElement('a');
        postTitleLink.href = `/project-folder/posts.html`;
        postTitleLink.textContent = `${post.title} (${commentCount} comments)`;

        const authorLink = document.createElement('a');
        authorLink.href = `/project-folder/index.html`;
        authorLink.textContent = ` by ${author.name}`;

      
        postElement.appendChild(postTitleLink);
        postElement.appendChild(authorLink);

        
        postsContainer.appendChild(postElement);
      });
    } catch (error) {
      console.error('Error fetching posts or comments:', error);
    }
  }

  
  fetchPostsAndComments();