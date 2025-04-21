// src/index.ts
var cards = [];
var transactions = [];
function renderCards() {
  const tbody = document.getElementById("cards-table-body");
  const fromSelect = document.getElementById("from-card");
  const toSelect = document.getElementById("to-card");
  tbody.innerHTML = "";
  fromSelect.innerHTML = '<option value="">Withdraw From</option>';
  toSelect.innerHTML = '<option value="">Deposit To</option>';
  for (const c of cards) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="p-2 border">${c.number}</td>
      <td class="p-2 border">${c.holder}</td>
      <td class="p-2 border">${c.expiry}</td>
      <td class="p-2 border">${c.cvv}</td>
      <td class="p-2 border">$${c.balance.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
    const optFrom = document.createElement("option");
    optFrom.value = c.number;
    optFrom.textContent = c.number;
    fromSelect.appendChild(optFrom);
    const optTo = document.createElement("option");
    optTo.value = c.number;
    optTo.textContent = c.number;
    toSelect.appendChild(optTo);
  }
}
function renderTransactions() {
  const tbody = document.getElementById("transactions-table-body");
  tbody.innerHTML = "";
  for (const t of transactions) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="p-2 border">${t.date}</td>
      <td class="p-2 border">${t.description}</td>
      <td class="p-2 border">$${t.amount.toFixed(2)}</td>
      <td class="p-2 border">${t.from}</td>
      <td class="p-2 border">${t.to}</td>
    `;
    tbody.appendChild(tr);
  }
}
document.getElementById("form-add-card").addEventListener("submit", (e) => {
  e.preventDefault();
  const num = document.getElementById("card-number").value;
  const holder = document.getElementById("card-holder").value;
  const expiry = document.getElementById("card-expiry").value;
  const cvv = document.getElementById("card-cvv").value;
  if (cards.some((c) => c.number === num)) {
    alert("Card already exists");
    return;
  }
  cards.push({ number: num, holder, expiry, cvv, balance: 0 });
  e.target.reset();
  renderCards();
});
document.getElementById("form-delete-card").addEventListener("submit", (e) => {
  e.preventDefault();
  const num = document.getElementById("del-card-number").value;
  cards = cards.filter((c) => c.number !== num);
  transactions = transactions.filter((t) => t.from !== num && t.to !== num);
  e.target.reset();
  renderCards();
  renderTransactions();
});
document.getElementById("form-transfer").addEventListener("submit", (e) => {
  e.preventDefault();
  const from = document.getElementById("from-card").value;
  const to = document.getElementById("to-card").value;
  const amt = parseFloat(document.getElementById("transfer-amount").value);
  if (!from || !to || from === to) {
    alert("Select different cards");
    return;
  }
  const cFrom = cards.find((c) => c.number === from);
  const cTo = cards.find((c) => c.number === to);
  if (!cFrom || !cTo || cFrom.balance < amt) {
    alert("Invalid transfer");
    return;
  }
  cFrom.balance -= amt;
  cTo.balance += amt;
  const now = new Date().toLocaleString();
  transactions.push({ amount: amt, date: now, description: "Transfer", from, to });
  e.target.reset();
  renderCards();
  renderTransactions();
});
renderCards();
renderTransactions();
