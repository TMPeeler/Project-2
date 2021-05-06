const newReview = async (event) => {
    event.preventDefault();
    
    const text = document.querySelector('#review').value.trim();
    const score = document.querySelector('#score').value.trim();
    const user_id = document.querySelector('#user_id').value.trim();
    const brew_id = document.querySelector('#brew_id').value.trim();
    

    if (text && score && user_id && brew_id){
        //not sure what to fetch 
      const response = await fetch('/api/review/newrev', {
        method:'POST',
        body: JSON.stringify({text, score, user_id, brew_id}),
        headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
          //this is where the user would be redirected to the new beer page for whichever one they were on
        document.location.replace(`${brew_id}`);
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('.new-review-form').addEventListener('submit', newReview);