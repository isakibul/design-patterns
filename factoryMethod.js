class Admin {
  constructor(name) {
    this.role = "Admin";
    this.name = name;
  }
}

class Guest {
  constructor(name) {
    this.role = "Guest";
    this.name = name;
  }
}

class Member {
  constructor(name) {
    this.role = "Member";
    this.name = name;
  }
}

class UserFactory {
  static createUser(type, name) {
    switch (type.toLowerCase()) {
      case "admin":
        return new Admin(name);
      case "guest":
        return new Guest(name);
      case "member":
        return new Member(name);
      default:
        throw new Error("Invalid user type");
    }
  }
}

const user1 = UserFactory.createUser("admin", "Sakibul");
const user2 = UserFactory.createUser("guest", "John");
const user3 = UserFactory.createUser("member", "Aisha");

console.log(user1);
console.log(user2);
console.log(user3);
