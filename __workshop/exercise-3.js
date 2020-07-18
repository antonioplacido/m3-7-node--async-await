// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num === "number") {
      console.log(num, "2 seconds...");
      setTimeout(() => {
        const deuxfois = num * 2;
        resolve(deuxfois);
      }, 2000);
    } else {
      error("This ain't it chief");
    }
  });
};

// 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
// 2. returns the double of the num

const handleSum = async (num) => {
  const un = await doublesLater(un);
  const deux = await doublesLater(deux);
  const trois = await doublesLater(trois);
  console.log(trois);
  return firstRun + secondRun + thirdRun;
};

// 3. handleSum function (async/await)

// 4. verification
handleSum(10).then((ans) => console.log(ans));

//Rewrite this as async
// const handleSum = (sum) => {
//   let theSum = 0;
//   return new Promise((resolve) => {
//     doublesLater(num).then((a) => {
//       theSum += a;
//       doublesLater(a).then((b) => {
//         theSum += b;
//         doublesLater(b).then((c) => {
//           theSum += c;
//           resolve(theSum);
//         });
//       });
//     });
//   });
// };

// //
