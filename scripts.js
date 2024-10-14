// Dummy Data
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  
  let products = [
    { id: 1, name: 'Laptop', price: 1200, stock: 10 },
    { id: 2, name: 'Phone', price: 800, stock: 15 }
  ];
  
  let orders = [
    { id: 1, customer: 'John Doe', product: 'Laptop', status: 'Shipped' },
    { id: 2, customer: 'Jane Smith', product: 'Phone', status: 'Pending' }
  ];
  
  // Show the correct section based on menu click
  function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }
  
  // Load Dashboard Data
  function loadDashboard() {
    document.getElementById('total-sales').innerText = `$${products.reduce((acc, p) => acc + p.price, 0)}`;
    document.getElementById('total-users').innerText = users.length;
    document.getElementById('total-orders').innerText = orders.length;
  }
  
  // Load Users Table
  function loadUsers() {
    const tbody = document.querySelector('#user-table tbody');
    tbody.innerHTML = ''; // Clear existing rows
    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td><button onclick="removeUser(${user.id})">Delete</button></td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // Add Product Function
  function addProduct() {
    const newProduct = { id: products.length + 1, name: 'New Product', price: 100, stock: 20 };
    products.push(newProduct);
    loadProducts();
  }
  
  // Load Products Table
  function loadProducts() {
    const tbody = document.querySelector('#product-table tbody');
    tbody.innerHTML = ''; // Clear existing rows
    products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td>${product.stock}</td>
        <td><button onclick="removeProduct(${product.id})">Delete</button></td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // Load Orders Table
  function loadOrders() {
    const tbody = document.querySelector('#order-table tbody');
    tbody.innerHTML = ''; // Clear existing rows
    orders.forEach(order => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.product}</td>
        <td>${order.status}</td>
        <td><button onclick="updateOrder(${order.id})">Update</button></td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // Remove User
  function removeUser(userId) {
    users = users.filter(user => user.id !== userId);
    loadUsers();
  }
  
  // Remove Product
  function removeProduct(productId) {
    products = products.filter(product => product.id !== productId);
    loadProducts();
  }
  
  // Initialize Data on Load
  window.onload = function() {
    loadDashboard();
    loadUsers();
    loadProducts();
    loadOrders();
  };
  