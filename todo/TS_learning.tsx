// controls type
let variable = "hello";
variable = "hi";

let ageWithType: number;
// ageWithType = 'hello'

let testString: string;
testString = "hello";

// Multiple types

let testStringOrNumber: string | number;
testStringOrNumber = "hi";

// Arrays

let names = ["hi", "hello"];
names.push("mama");

// Define array types

let testStingArray: string[];
testStingArray = ["hi", "hello"];

// Union types
let testStingOrNumber: (string | number)[];
testStingOrNumber = [1, "hi"];

////////////////////////////////////////////////////
// OBJECTS

let user = {
  username: "John",
  age: 22,
  isAdmin: true,
};

user.username = "John";
user.age = 22;

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: "John",
  age: 22,
  isAdmin: false,
};

// Conditional object - some users do have phone number, and some do not have
let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string; //Is not required
};

userObj2 = {
  username: "John",
  age: 22,
  isAdmin: false,
};

// Any Type
let testAny: any;
testAny = 12;
testAny = [];

let testAnyArray: any[];
testAnyArray = [1, "hello", {}];

////////////////////////////////////////////////////////////////////////

// FUNCtIONS

let sayHi = () => {
  console.log("hi");
};
// sayHi = 'hi'

// To returns something, for example string

let functionReturnString = (): string => {
  console.log("hi");
  return "lama dev";
};

let multiple = (num: number) => {
  return num * 2;
};

// TS is wise enough not to specify what is returning, but it is number as is said beyond
let multiple2 = (num: number): number => {
  return num * 2;
};

let multiple3 = (num: number): void => {
  // Do something but don't return
};

// Let make a function where 1 parameter is Not Required
let sum = (num1: number, num2: number, another?: number): number => {
  return num1 + num2;
};
sum(2, 3);

let func = (user: { username: string; password: string; phone?: string }) => [
  console.log(user.username),
];
//  It is seemed too long, especially if there is more than 3
// properties, so it is wise to use type aliases

///////////////////////////////////////////////////////////////////////////
/* Types in TypeScript are more flexible and can define primitive, 
intersection, union, tuple, or different types 
of data, while interfaces are used to describe the shape of an object.  */

// TYPE ALIASES
type UserType = {
  username: string;
  password: string;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  return [user.username];
};

// Prototype of function

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + "times" + str);
};

type UserType2 = {
  username: string;
  password: string;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: UserType2 = {
  username: "John",
  password: "juju",
  theme: "light",
};

//////////////////////////////////////////////////////////

// INTERFACES

interface IUser {
  userName: string;
  email: string;
  age: number;
}
interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  userName: "John",
  email: "juju@gmail.com",
  age: 12,
  employeeId: 22,
};

const client: IUser = {
  userName: "Maria",
  email: "string@string.com",
  age: 1,
};

/////////////////////////////////////////////////////////

// GENERICS

interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}
interface IPost {
  id: string;
  title: string;
  description: string;
  // IMAGINE -> OUR POST HAS MULTIPLE USERS AND MULTIPLE CATEGORIES
  // AND I WANT TO FETCH THIS POST USING USERS OR CATEGORIES
  extra: IAuthor[] | ICategory[];
}

// BETTER WAY TO MAKE
interface IPostBetter<T> {
  id: number;
  title: string;
  description: string;
  extra: T[]; //it can be string, number => what ever I pass!!
}

let testMe: IPostBetter<String> = {
  id: 1,
  title: "post title",
  description: "post desc",
  extra: ["str1", "str2"],
};

// Interface with limitations that only objects can be
interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  description: string;
  extra: T[];
}

let testMe2: IPostEvenBetter<IAuthor | ICategory> = {
  id: 1,
  title: "post title",
  description: "post desc",
  extra: [
    { id: 1, username: "john" },
    { id: 2, title: "category title" },
  ],
};
