/*const square = function (x) {
  return x ** 2;
};

const square = (x) => x ** 2;

console.log(square(3));
*/

const event = {
  name: "brithday",
  guestList: ["hawa", "yama", "zay"],
  printGuestList() {
    console.log("guest lsit  for" + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest, "attending", this.name);
    });
  },
};

event.printGuestList();
