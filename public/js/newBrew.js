const newPosting = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#newp-title').value.trim();
    const content = document.querySelector('#newp-body').value.trim();
    console.log('function running');
    if (title && content){
      const response = await fetch('/api/post/newp',{
        method:'POST',
        body: JSON.stringify({title,content}),
        headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
        document.location.replace('/api/post/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };