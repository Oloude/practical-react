const orders = [
  {
    id: 1,
    customer: "John",
    status: "completed",
    items: [
      { name: "Laptop", price: 1200, quantity: 1 },
      { name: "Mouse", price: 50, quantity: 2 },
    ],
  },
  {
    id: 2,
    customer: "Sarah",
    status: "pending",
    items: [
      { name: "Phone", price: 800, quantity: 1 },
      { name: "Headphones", price: 150, quantity: 1 },
    ],
  },
  {
    id: 3,
    customer: "Mike",
    status: "completed",
    items: [
      { name: "Keyboard", price: 100, quantity: 1 },
      { name: "Mouse", price: 50, quantity: 1 },
    ],
  },
  {
    id: 4,
    customer: "Jane",
    status: "cancelled",
    items: [{ name: "Monitor", price: 400, quantity: 2 }],
  },
];

export default function LevelFour() {
  // getCustomersName()
  // getAllCompletedOrders()
  // getAllProductOrdered()
  // getUniqueProductOrdered()
  // getTotalPricePerOrder()
  // addTotalToEveryOrder()
  // findHighestValueOrder()
  // getTotalRevenueFromCompletedOrders()
  // getCountOfItemsPurchased();
  return <div>LevelFour</div>;
}

function getCustomersName() {
  const customersName = orders.map((order) => order.customer);

  console.log(customersName);
}

function getAllCompletedOrders() {
  const allCompletedOrders = orders.filter(
    (order) => order.status === "completed",
  );

  console.log(allCompletedOrders);
}

function getAllProductOrdered() {
  const allProductOrdered = orders
    .map((order) => order.items.map((item) => item.name))
    .flatMap((order) => order);

  console.log(allProductOrdered);
}

function getUniqueProductOrdered() {
  const uniqueProductOrdered = [
    ...new Set(
      orders
        .map((order) => order.items.map((item) => item.name))
        .flatMap((order) => order),
    ),
  ];
  console.log(uniqueProductOrdered);
}

function getTotalPricePerOrder() {
  const totalPricePerOrder = orders.reduce((total, order) => {
    total[order.customer] =
      (total[order.customer] || 0) +
      order.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    return total;
  }, {});

  console.log(totalPricePerOrder);
}

function addTotalToEveryOrder() {
  const ordersWithTotal = orders.map((order) => ({
    ...order,
    total: order.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ),
  }));

  console.log(ordersWithTotal);
}

function findHighestValueOrder() {
  const ordersWithTotal = orders.map((order) => ({
    ...order,
    total: order.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ),
  }));

  let highest = ordersWithTotal[0];

  for (let i = 1; i < ordersWithTotal.length; i++) {
    if (ordersWithTotal[i].total > highest.total) highest = ordersWithTotal[i];
  }

  console.log(highest.customer);
}

function getTotalRevenueFromCompletedOrders() {
  const totalRevenueFromCompletedOrders = orders.reduce(
    (total, order) =>
      total +
      (order.status === "completed"
        ? order.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
          )
        : 0),
    0,
  );
  console.log(totalRevenueFromCompletedOrders);
}

function getCountOfItemsPurchased() {
  const items = orders.flatMap(order => order.items)
  const countOfItemsPurchased = items.reduce((group, item)=> {
    group[item.name] = (group[item.name] || 0) + item.quantity
    return group
  }, {})

  console.log(countOfItemsPurchased)
}
