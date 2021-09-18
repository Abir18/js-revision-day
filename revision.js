// ১. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে অবজেক্ট এর প্রপার্টি এর মান কিভাবে বসায় সেটা জানতে হবে। বিশেষ করে নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। বা কোন একটা অবজেক্ট এর প্রপার্টি array সেই array থেকে ভ্যালু এনে কিভাবে টেমপ্লেট স্ট্রিং এর মধ্যে বসাতে পারবে ।

const products = {
  id: 1,
  name: 'iPhone',
  price: '$699',
  spec: {
    camera: {
      front: [
        { 0: '16MP', 1: '1.7A' },
        { 0: '20MP', 1: '2.2A' },
      ],
      rear: [
        { 0: '20MP', 1: '2.2A' },
        { 0: '16MP', 1: '1.7A' },
      ],
    },
  },
};

const {
  price,
  spec: {
    camera: { front },
  },
  name,
} = products;

const output = `This phone is ${products['name']} front camera ${front.map(
  f => f
)}`;
// console.log(output);
// console.log(front);

// front.forEach(f => console.log(f));
const mapped = front.map(f => {
  console.log('mapped with', f);
  return f;
});
const filtered = front.filter(f => f['1'] == '2.2A');
const find = front.find(f => f['1'] == '2.2A');
console.log(filtered);
console.log(find);

// ২. স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে)

const array1 = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];

const array2 = ['a', ...array1, 'x'];
const array3 = array1;

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array1 === array2);
console.log(array1 === array3);

const smallValue = array2.filter(num => num < 11);
console.log('small', smallValue);

const array4 = [...smallValue];
console.log(array4);

// array1 = [...smallValue];  // ERROR ASSIGNMENT TO CONSTANT VARIABLE
// console.log('array1', array1);

// ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে।

const number = () => 9;
console.log(number());

// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে।

const multiply = number => number * 12;
console.log(multiply(9));

// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।

const div = (num1, num2) => (num1 + num2) / 4;
console.log(div(4, 8));

// ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।

const twoNumbers = (num1, num2) => {
  return (num1 + 5) * (num2 + 5);
};

console.log(twoNumbers(3, 5));

// ৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const course = {
  id: 1,
  title: 'React',
  details: {
    duration: '3 months',
    fee: 5000,
  },
};

const {
  title,
  details: { duration, fee },
} = course;
console.log(title, duration, fee);

// Array Destructuring
const conference = [
  {
    id: 'i12',
    name: 'iPhone12',
  },
  {
    id: 'i13',
    name: 'iPhone13',
  },
];

const [income, balance] = conference;
console.log(balance);

// ৫. shorthand দিয়ে অবজেক্ট কিভাবে ডিক্লেয়ার করে। {a , b } স্টাইলে।

const cat = 'Miaow';
const dog = 'Woof';
const bird = 'Peet peet';

const someObject = {
  cat,
  dog,
  bird,
};

console.log(someObject);

// ৬. ফাংশন এর মধ্যে ডিফল্ট প্যারামিটার কিভাবে ডিক্লেয়ার করে

const defaultParameter = (num1 = 3, num2 = 4) => {
  return (num1 + 5) * (num2 + 5);
};

console.log(defaultParameter());

// ৭. অপশনাল চেইনিং কি জিনিস। সেটা কখন কিভাবে ইউজ করে। না জানলে গুগলে সার্চ দাও

let customer = {
  name: 'Carl',
  details: {
    age: 82,
    location: 'Paradise Falls',
  },
};
let customerCity = customer.details?.address?.city;

// … this also works with optional chaining function call
let customerName = customer.name?.getName?.();

console.log('customerCity', customerCity, 'customerName', customerName);

// ১.১ অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা ২ দিয়ে গুণ করে গুণফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

const numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];

const double = numbers.map(number => number * 2);
console.log(double);
