class Card {
  constructor(
    public cardNumber: string,
    public cardHolder: string,
    public expirationDate: string,
    public cvv: string,
    public balance: number = 0
  ) {}
}

class CardManager {
  constructor(public cards: Card[] = []) {}

  addCard(card: Card) {
    const finded = this.cards.find((c) => c.cardNumber === card.cardNumber);
    if (finded) {
      console.log("card allaqachon qoshilgan");
      return;
    } else {
      this.cards.push(card);
    }
    console.log(this.cards);
  }
  deleteCard(cardNumber: string) {
    const findIdx = this.cards.findIndex((c) => c.cardNumber === cardNumber);
    if (findIdx === -1) {
      console.log("card mavjudmas");
      return;
    }
    console.log("deleted card: ", this.cards[findIdx]);
    this.cards.splice(findIdx, 1);
  }
  getBalance(cardNumber: string) {
    const finded: Card = this.cards.find((c) => c.cardNumber === cardNumber)!;
    if (!finded) {
      console.log("card topilmadi");
      return;
    }
    console.log(finded.balance);
  }
}

const manager = new CardManager();

const card1 = new Card("1234567812345678", "Ali", "12/26", "123", 342);
const card2 = new Card("1234567812345478", "Bobur", "12/26", "1223", 572);
const card3 = new Card("1234567812345778", "Hasan", "12/26", "1234", 8888);
manager.addCard(card1);
manager.addCard(card2);
manager.addCard(card3);
manager.deleteCard("1234567812345678");
manager.getBalance("1234567812345478");
