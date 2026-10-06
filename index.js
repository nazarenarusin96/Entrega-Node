const API_URL = "https://dummyjson.com";

const [, , method, resource, ...args] = process.argv;

const showHelp = () => {
  console.log(`
Uso del programa:

npm run start GET products
npm run start GET products/<productId>
npm run start POST products <title> <price> <category>
npm run start DELETE products/<productId>

Ejemplos:

npm run start GET products
npm run start GET products/15
npm run start POST products T-Shirt-Rex 300 remeras
npm run start DELETE products/7
`);
};

const printResult = (data) => {
  console.log(JSON.stringify(data, null, 2));
};

const getAllProducts = async () => {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  const products = await response.json();
  printResult(products);
};

const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  const product = await response.json();
  printResult(product);
};

const createProduct = async (title, price, category) => {
  const newProduct = {
    title,
    price: Number(price),
    category,
  };

  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  const product = await response.json();
  printResult(product);
};

const deleteProduct = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  const result = await response.json();
  printResult(result);
};

const main = async () => {
  if (!method || !resource) {
    showHelp();
    return;
  }

  const [resourceName, productId] = resource.split("/");

  if (resourceName !== "products") {
    throw new Error("El recurso debe ser products");
  }

  switch (method.toUpperCase()) {
    case "GET":
      if (productId) {
        await getProductById(productId);
      } else {
        await getAllProducts();
      }
      break;

    case "POST": {
      const [title, price, category] = args;
      await createProduct(title, price, category);
      break;
    }

    case "DELETE":
      if (!productId) {
        throw new Error("Debes indicar el ID del producto.");
      }
      await deleteProduct(productId);
      break;

    default:
      throw new Error("Método no soportado.");
  }
};

try {
  await main();
} catch (error) {
  console.error(error.message);
}