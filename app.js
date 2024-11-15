// fetch("https://fakestoreapi.com/products/").then((response) => {
//   return (response.json());
// }).then((data) => {
//     console.log(data);

// });

// async function name() {
//     try {
//         let data = await fetch("https://fakestoreapi.com/products");
//         let products = await data.json();
//         products.map((product) => {
//             let p = document.createElement("p")
//             document.body.appendChild(p)
//             p.textContent = product.title
//         })
//   } catch (error) {
//     let p = document.createElement("p");
//     p.textContent = "gangganggan";
//     document.body.appendChild(p)
//   }
// }

// name();



async function name() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/todos/");
        let tasks = await data.json();
        tasks.map((task) => {
            let h1 = document.createElement("h1");
            document.body.appendChild(h1);
            h1.textContent = `title: ${task.title}`
            let p = document.createElement("p")
            document.body.appendChild(p)
            if (task.completed == true) {
                p.textContent = "completed"
            } else{
                p.textContent = "not completed"
            }
        })
  } catch (error) {
  }
}

name();