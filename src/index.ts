export class Card {
  constructor(
    public cardNumber: string,
    public cardHolder: string,
    public expirationDate: string,
    public cvv: string,
    public balance: number = 0
  ) {}
}

enum TransactionType {
  Transfer = "Transfer",
  Deposit = "Deposit",
  Withdrawal = "Withdrawal",
}

export class Transaction {
  constructor(
    public amount: number,
    public type: TransactionType,
    public fromCard: string | null,
    public toCard: string | null,
    public date: Date = new Date(),
    public description: string = ""
  ) {}
}

export class CardManager {
  public cards: Card[] = [];
  public transactions: Transaction[] = [];

  addCard(card: Card){
    const existing = this.cards.find((c) => c.cardNumber === card.cardNumber);
    if (existing) {
      console.error("Card allaqachon qoshilgan");
      return;
    }
    this.cards.push(card);
    console.log("Card qoshildi:", card);
  }

  deleteCard(cardNumber: string): void {
    const idx = this.cards.findIndex((c) => c.cardNumber === cardNumber);
    if (idx === -1) {
      console.error("Card mavjudmas");
      return;
    }
    const [removed] = this.cards.splice(idx, 1);
    console.log("Deleted card:", removed);
  }
 
  getBalance(cardNumber: string): number | undefined {
    const card = this.cards.find((c) => c.cardNumber === cardNumber);
    if (!card) {
      console.error("Card mavjudmas");
      return;
    }
    console.log(`Balance for ${cardNumber}: $${card.balance}`);
    return card.balance;
  }

  transfer(amount: number, fromCardNumber: string, toCardNumber: string){
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

    const newdate = new Transaction(
      amount,
      TransactionType.Transfer,
      from.cardNumber,
      to.cardNumber,
      new Date(),
      `Transfer from ${from.cardHolder} to ${to.cardHolder}`
    );
    this.transactions.push(newdate);

    console.log("Transfer completed:", newdate);
  }

  getTransactions(): Transaction[] {
    console.log("All transactions:", this.transactions);
    return this.transactions;
  }
}

const manager = new CardManager();
manager.addCard(new Card("1111222233334444", "Ali", "12/26", "123", 500));
manager.addCard(new Card("5555666677778888", "Bobur", "11/25", "456", 300));

manager.transfer(150, "1111222233334444", "5555666677778888");

manager.getBalance("1111222233334444");
manager.getBalance("5555666677778888");
manager.getTransactions();
