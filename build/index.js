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

class CardManager {
  cards;
  constructor(cards = []) {
    this.cards = cards;
  }
  addCard(card) {
    const finded = this.cards.find((c) => c.cardNumber === card.cardNumber);
    if (finded) {
      console.log("card allaqachon qoshilgan");
      return;
    } else {
      this.cards.push(card);
    }
    console.log(this.cards);
  }
  deleteCard(cardNumber) {
    const findIdx = this.cards.findIndex((c) => c.cardNumber === cardNumber);
    if (findIdx === -1) {
      console.log("card mavjudmas");
      return;
    }
    console.log("deleted card: ", this.cards[findIdx]);
    this.cards.splice(findIdx, 1);
  }
  getBalance(cardNumber) {
    const finded = this.cards.find((c) => c.cardNumber === cardNumber);
    if (!finded) {
      console.log("card topilmadi");
      return;
    }
    console.log(finded.balance);
  }
}
var manager = new CardManager;
var card1 = new Card("1234567812345678", "Ali", "12/26", "123", 342);
var card2 = new Card("1234567812345478", "Bobur", "12/26", "1223", 572);
var card3 = new Card("1234567812345778", "Hasan", "12/26", "1234", 8888);
manager.addCard(card1);
manager.addCard(card2);
manager.addCard(card3);
manager.deleteCard("1234567812345678");
manager.getBalance("1234567812345478");
