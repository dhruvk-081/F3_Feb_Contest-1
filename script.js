fetch("https://dummyjson.com/products")
  .then((data) => {
    console.log(data);
    return data.json(); //converted to object
  })
  .then((objectData) => {
    console.log(objectData.products);
    let divData = "";
    objectData.products.map((e) => {
      divData += `
      <div id="itemList">
        <img src="${e.images[0]}" alt="" />
        <table>
          <tbody>
              <tr>
                  <td>Title:${e.title}</td>
              </tr>
              <tr>
                  <td>Brand: ${e.brand}</td>
              </tr>
              <tr>
                  <td>Price ${e.price}</td>
              </tr>
              <tr>
                  <td>Rating : ${e.rating}</td>
              </tr>
              <tr>
                  <td>Stock : ${e.stock}</td>
              </tr>
          </tbody>
        </table>
      </div>
        `;
    });
    document.getElementById("cartData").innerHTML = divData;
  });
