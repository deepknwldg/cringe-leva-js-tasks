function likeOrDislike(buttons){
    if (buttons.length>1) {
      return buttons[buttons.length-1]==buttons[buttons.length-2] ? 'Nothing' : buttons[buttons.length-1];
    }
    else if (buttons.length==1) {
      return buttons[buttons.length-1];
    }
    else{
      return 'Nothing'
    }
  }
  
  console.log(likeOrDislike(['Dislike']));
  console.log(likeOrDislike(['Like', 'Like']));
  console.log(likeOrDislike(['Dislike', 'Like']));
  console.log(likeOrDislike(['Like','Dislike', 'Dislike']));
  console.log(likeOrDislike(['Like', 'Like', 'Dislike', 'Like','Like','Like','Like', 'Dislike']));
  console.log(likeOrDislike([]));