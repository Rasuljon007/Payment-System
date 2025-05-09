// src/index.ts
class Card {
  cardNumber;
  cardHolder;
  expirationDate;
  cvv;
  balance;
  constructor(cardNumber, cardHolder, expirationDate, cvv, balance = 0) {
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
    this.balance = balance;
  }
}
class Transaction {
  amount;
  type;
  fromCard;
  toCard;
  date;
  description;
  constructor(amount, type, fromCard, toCard, date = new Date, description = "") {
    this.amount = amount;
    this.type = type;
    this.fromCard = fromCard;
    this.toCard = toCard;
    this.date = date;
    this.description = description;
  }
}

class CardManager {
  cards = [];
  transactions = [];
  addCard(card) {
    const existing = this.cards.find((c) => c.cardNumber === card.cardNumber);
    if (existing) {
      console.error("Card allaqachon qoshilgan");
      return;
    }
    this.cards.push(card);
    console.log("Card qoshildi:", card);
  }
  deleteCard(cardNumber) {
    const idx = this.cards.findIndex((c) => c.cardNumber === cardNumber);
    if (idx === -1) {
      console.error("Card mavjudmas");
      return;
    }
    const [removed] = this.cards.splice(idx, 1);
    console.log("Deleted card:", removed);
  }
  getBalance(cardNumber) {
    const card = this.cards.find((c) => c.cardNumber === cardNumber);
    if (!card) {
      console.error("Card mavjudmas");
      return;
    }
    console.log(`Balance for ${cardNumber}: $${card.balance}`);
    return card.balance;
  }
  transfer(amount, fromCardNumber, toCardNumber) {
    if (fromCardNumber === toCardNumber) {
      console.error("Bir xil kartaga pul otkizib bolmaydi");
      return;
    }
    const from = this.cards.find((c) => c.cardNumber === fromCardNumber);
    const to = this.cards.find((c) => c.cardNumber === toCardNumber);
    if (!from || !to) {
      console.error("Kartalar topilmadi");
      return;
    }
    if (from.balance < amount) {
      console.error("Mablag' yetarli emas");
      return;
    }
    from.balance -= amount;
    to.balance += amount;
    const newdate = new Transaction(amount, "Transfer" /* Transfer */, from.cardNumber, to.cardNumber, new Date, `Transfer from ${from.cardHolder} to ${to.cardHolder}`);
    this.transactions.push(newdate);
    console.log("Transfer completed:", newdate);
  }
  getTransactions() {
    console.log("All transactions:", this.transactions);
    return this.transactions;
  }
}
var manager = new CardManager;
manager.addCard(new Card("1111222233334444", "Ali", "12/26", "123", 500));
manager.addCard(new Card("5555666677778888", "Bobur", "11/25", "456", 300));
manager.transfer(150, "1111222233334444", "5555666677778888");
manager.getBalance("1111222233334444");
manager.getBalance("5555666677778888");
manager.getTransactions();
export {
  Transaction,
  CardManager,
  Card
};
