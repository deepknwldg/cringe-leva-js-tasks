function time(distance, boatSpeed, stream){
    [streamDirection, streamSpeed] = stream.split(" ");
    streamSpeed = parseInt(streamSpeed);
    if (streamDirection == 'Upstream') {
      streamSpeed *= -1
    }
    
    return Math.round((distance / (boatSpeed + streamSpeed))*100)/100;
  }
  
  console.log(time(24, 10, 'Downstream 2'));
  console.log(time(24, 14, 'Upstream 2'));
  console.log(time(54, 28, 'Downstream 3'));