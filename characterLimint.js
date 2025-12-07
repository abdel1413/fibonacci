function canPost(message) {
   let length = message.length;
   let response; 
   if(length <= 40){
     response  = 'short post'
   }else if(length <= 80){
     response = 'long post'
   }else{
     response = "invalid post"
   }
  return response;
}
