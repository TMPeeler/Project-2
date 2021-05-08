const newBrew = async (event) => {
    event.preventDefault();
    // const pic = document.querySelector('#pic').value.trim();
    const name = document.querySelector('#name').value.trim();
    const breweryName = document.querySelector('#brewery').value.trim();
    const description = document.querySelector('#desc').value.trim();
    const alcContent = document.querySelector('#alcohol').value.trim();
    const style = document.querySelector('#style').value.trim();
    

    if (name && breweryName && description  && alcContent && style){
        // change this to whatever the name of the route with the specific beer is called
      const response = await fetch('/api/brew/newbrew',{
        method:'POST',
        body: JSON.stringify({name , breweryName, description, alcContent, style}),
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