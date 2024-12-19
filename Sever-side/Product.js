const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
//โย่! ถ้าเห็นตรงนี้ที่มี .//ตรงนี้. ให้ตีเป็นว่า '/products' or  products เป็นแบ้งไว้ก่อนเด้ออออ
app.use(bodyParser.json());

app.get('/products', (req, res) => {
    res.json(products);
  }); //ตรงนี้

app.post('/products', (req, res) => {
    const { name, description, price, quantity } = req.body; //ม่องนี้

if (!name || price == null || quantity == null) {
        return res.status(400).json({ message: 'Name, price, and quantity are required.' }); //เจร์อาเองอยากจะบอกอะไรก็บอก
      }

      const newProduct = {
        id: products.length + 1, // Auto-incrementing ID
        name,
        description: description || '',
        price,
        quantity,
      };

      products.push(newProduct);
  res.status(201).json(newProduct);
});//ตรงนี้

app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, description, price, quantity } = req.body; //ตรงนี้

    const product = products.find(p => p.id === productId); //ตรงนี้

  if (!product) {
    return res.status(404).json({ message: 'Product not found.' });
  }//ตรงนี้

  if (name) product.name = name;
  if (description) product.description = description;
  if (price != null) product.price = price;
  if (quantity != null) product.quantity = quantity;

  res.json(product);
});//ตรงนี้

app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found.' });
    } //ตรงนี้

    const deletedProduct = products.splice(productIndex, 1);
  res.json(deletedProduct);
});//ตรงนี้

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
  });
