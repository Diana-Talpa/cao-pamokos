function createNavMenu() {
    
    const ul = document.createElement('ul');

    const menuItems = [
      { text: 'Posts', href: './posts.html' },
      { text: 'Users', href: './index.html' },
      { text: 'Albums', href: './albums.html' }
    ];

    
    menuItems.forEach(item => {  
      const li = document.createElement('li');
    
      const a = document.createElement('a');
      a.href = item.href; 
      a.textContent = item.text;
      
      li.appendChild(a);
     
      ul.appendChild(li);
    });
   
    document.body.appendChild(ul);
  }

  createNavMenu();