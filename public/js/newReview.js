const newReview = async (event) => {
    event.preventDefault();
    
    const review = document.querySelector('#review').value.trim();
    const score = document.querySelector('#score').value.trim();
    

    if (review && score ){
        //not sure what to fetch 
      const response = await fetch('',{
        method:'POST',
        body: JSON.stringify({review, score}),
        headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
          //this is where the user would be redirected to the new beer page for whichever one they were on
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.new-review-form')
  .addEventListener('submit', newBrew);