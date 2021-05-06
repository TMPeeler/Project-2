const newBrew = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#newp-title').value.trim();
    const title = document.querySelector('#newp-title').value.trim();
    const description = document.querySelector('#desc').value.trim();
    const brewery = document.querySelector('#brewery').value.trim();
    const alcohol = document.querySelector('#alcohol').value.trim();
    const style = document.querySelector('#style').value.trim();


    if (name && title && description && brewery && alcohol && style ){
        // change this to whatever the name of the route with the specific beer is called
      const response = await fetch('/newbrew',{
        method:'POST',
        body: JSON.stringify({name ,title, description, brewery, alcohol, style,}),
        headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.new-beer-form')
  .addEventListener('submit', newBrew);