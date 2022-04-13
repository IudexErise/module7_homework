// Task 7.3

function noProto() {
    const apple = Object.create(null);
    return apple;
   }
  console.log(noProto())