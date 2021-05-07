const newReview = async (event) => {
    event.preventDefault();
    
    const text = document.querySelector('#review').value.trim();
    const score = document.querySelector('#score').value.trim();
    const brew_id = document.querySelector('#brew_id').value.trim();
    

    if (text && score && brew_id){
      const response = await fetch('/api/review/newrev', {
        method:'POST',
        body: JSON.stringify({text, score, brew_id}),
        headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
          //this is where the user will be redirected to the beer page for whichever one they are on
          document.location.replace(`${brew_id}`);
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('.new-review-form').addEventListener('submit', newReview);