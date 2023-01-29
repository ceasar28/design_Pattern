// creating a Telephone class
class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = new Set();
  }

  // Adding a new phone number
  AddPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  // Removing a phone number
  RemovePhoneNumber(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  // Dial a phone number
  DialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
      this.notifyObservers(phoneNumber);
    } else {
      console.log(
        "Invalid phone number. Please add the number before dialling."
      );
    }
  }

  // Adding observer
  AddObserver(observer) {
    this.observers.add(observer);
  }

  // Removing observer
  RemoveObserver(observer) {
    this.observers.delete(observer);
  }

  // Notifying observers
  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.Update(phoneNumber));
  }
}

class Observer {
  constructor() {}

  Update(phoneNumber) {
    console.log(`Now dialing  +${phoneNumber}`);
  }
}

class Observer2 {
  constructor() {}

  Update(phoneNumber) {
    console.log(`Dialing Notification  +${phoneNumber}`);
  }
}

const tel = new Telephone();
tel.AddPhoneNumber(2347064350087);

const observer = new Observer();
tel.AddObserver(observer);

const observer2 = new Observer2();
tel.AddObserver(observer2);

tel.DialPhoneNumber(2347064350087);

/** Output: Now dialling +2347064350087
 Output: Dialling Notification +2347064350087 **/
