function loadScript(src) {
    const script = document.createElement('script')
    script.src = src;
    document.head.prepend(script);
}
loadScript('navigation.js')

function fetchUsersAndPosts() {
   
    Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()),
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
    ])
    .then(([users, posts]) => {
        
        const heading = document.createElement('h1');
        heading.textContent = 'User List with Post Counts';
        document.body.appendChild(heading);

        
        const userList = document.createElement('ul');

       
        const postCounts = {};
        posts.forEach(post => {
            postCounts[post.userId] = (postCounts[post.userId] || 0) + 1;
        });

        
        users.forEach(user => {
            const listItem = document.createElement('li');
            const userLink = document.createElement('a');
            
           
            userLink.href = `user-pages/user${user.id}.html`;
            userLink.textContent = user.name;
            
            
            const postCountSpan = document.createElement('span');
            postCountSpan.textContent = ` - Posts: ${postCounts[user.id] || 0}`;

           
            listItem.appendChild(userLink);
            listItem.appendChild(postCountSpan);

            userList.appendChild(listItem);
        });

        
        document.body.appendChild(userList);
    })
    .catch(error => console.error('Error fetching users or posts:', error));
}


window.onload = fetchUsersAndPosts;