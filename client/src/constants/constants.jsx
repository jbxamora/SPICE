import {
  pizza,
  feast,
  cake,
  desert,
  salmon,
  salad,
  cruterie,
  chickensand,
  kabob,
  breakfast,
  pankeke,
  salad2,
} from "../assets";

export const dummyPosts = [
  {
    id: "1",
    title: "Easy & Delicious Family Style Meal",
    imageUrl: feast,
    content:
      "Nothing brings a family together quite like a delicious home-cooked meal. In today's blog post, we'll share our favorite easy and delicious family style meal ideas that will make your family dinners unforgettable. Whether you're planning a weekly dinner or a special occasion, these recipes are sure to please everyone at the table...",
    author: {
      name: "John Doe",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    date: "April 7, 2023",
  },
  {
    id: "2",
    title: "Ready To Level Up Your Baking?",
    imageUrl: cake,
    content:
      "Baking can be an incredibly rewarding hobby, but it can also be challenging if you're just starting out. If you're ready to level up your baking skills, look no further! In this post, we'll share some of our favorite baking tips and tricks, as well as some delicious recipes to help you take your baking to the next level...",
    author: {
      name: "Jane Smith",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
    },
    date: "April 6, 2023",
  },
  {
    id: "3",
    title: "Minimal Ingredients, Amazing Pizza!",
    imageUrl: pizza,
    content:
      "Who says you need a long list of ingredients to make a delicious pizza at home? With just a few simple ingredients and a little creativity, you can create amazing pizzas that will impress your family and friends. In this blog post, we'll share our favorite minimal ingredient pizza recipes, as well as some tips for making the perfect pizza dough...",
    author: {
      name: "Tom Brown",
      avatarUrl: "https://i.pravatar.cc/150?img=7",
    },
    date: "April 5, 2023",
  },
  {
    id: "4",
    title: "Tried Making A Michelin Desert",
    imageUrl: desert,
    content:
      "Have you ever wanted to recreate a Michelin-starred dessert in your own kitchen? Today, we'll guide you through the process of making an exquisite dessert that's worthy of the finest restaurants. Get ready to wow your dinner guests with a dessert that's as beautiful as it is delicious...",
    author: {
      name: "Alice Johnson",
      avatarUrl: "https://i.pravatar.cc/150?img=9",
    },
    date: "April 4, 2023",
  },
  {
    id: "5",
    title: "Caught Then Prepared Fresh Fish!",
    imageUrl: salmon,
    content:
      "There's nothing quite like the taste of freshly caught fish. In this blog post, we'll share our experience of catching, cleaning, and preparing fresh fish, as well as some delicious recipes to help you make the most of your catch. Whether you're an experienced angler or just starting out, these tips and recipes will help you enjoy the freshest, most flavorful fish possible...",
    author: {
      name: "Charlie Green",
      avatarUrl: "https://i.pravatar.cc/150?img=11",
    },
    date: "April 3, 2023",
  },
  {
    id: "6",
    title: "Low Calorie High Protein Tofu Salad",
    imageUrl: salad,
    content:
      "Looking for a healthy, satisfying meal that won't weigh you down? This low-calorie, high-protein tofu salad is just what you need! Packed with fresh veggies, flavorful herbs, and a zesty dressing, this salad is as delicious as it is nutritious. In this blog post, we'll share our favorite tofu salad recipe and tips for customizing it to suit your tastes...",
    author: {
      name: "Emily White",
      avatarUrl: "https://i.pravatar.cc/150?img=13",
    },
    date: "April 2, 2023",
  },
];

export const dummySavedPosts = [
  {
    id: "4",
    title: "Tried Making A Michelin Desert",
    Url: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    title: "Caught Then Prepared Fresh Fish!",
    Url: "https://via.placeholder.com/150",
  },
  {
    id: "6",
    title: "Low Calorie High Protein Tofu Salad",
    Url: "https://via.placeholder.com/150",
  },
];

export const potentialFriends = [
  {
    id: 1,
    name: "Bonnie Green",
    experience: "Professional Chef",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=500&h=500",
  },
  {
    id: 2,
    name: "Michael Brown",
    experience: "Home Cook",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=500&h=500",
  },
  {
    id: 3,
    name: "Ava Smith",
    experience: "Advanced Home Cook",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=crop&w=500&h=500",
  },
  {
    id: 4,
    name: "Oliver Johnson",
    experience: "Novice Home Cook",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?fit=crop&w=500&h=500",
  },
  {
    id: 5,
    name: "Sophia Williams",
    experience: "Culinary Student",
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?fit=crop&w=500&h=500",
  },
];

export const postIngredients = {
  1: [
    "2 cups all-purpose flour",
    "1 teaspoon baking powder",
    "1/2 teaspoon baking soda",
    "1/2 teaspoon salt",
    "1/2 cup unsalted butter, softened",
    "1 cup granulated sugar",
    "2 large eggs",
    "1/2 cup milk",
    "1 teaspoon vanilla extract",
  ],
  2: [
    "2 cups all-purpose flour",
    "1 teaspoon baking powder",
    "1/2 teaspoon baking soda",
    "1/2 teaspoon salt",
    "1/2 cup unsalted butter, softened",
    "1 cup granulated sugar",
    "2 large eggs",
    "1/2 cup milk",
    "1 teaspoon vanilla extract",
  ],
  3: ["Ingredient 7", "Ingredient 8", "Ingredient 9"],
  // ...
};

export const searchPlaceholders = [
  "Search recipes...",
  "Find ingredients...",
  "Discover new dishes...",
  "Explore cuisines...",
  "What's for dinner?",
  "Uncover hidden gems...",
  "Cook like a pro...",
  "Craving something sweet?",
  "Vegetarian delights...",
  "Vegan recipes...",
  "Spice up your life...",
  "Quick and easy meals...",
  "Healthy options...",
  "Low-carb choices...",
  "Satisfy your taste buds...",
];

export const Images = [
  cruterie,
  chickensand,
  kabob,
  breakfast,
  pankeke,
  salad2,
];

export const dummyComments = {
  1: [
    {
      id: 1,
      content: "This is the first comment",
      author: "John Doe",
      date: "April 10, 2023",
      replies: [
        {
          id: 2,
          content: "This is a reply to the first comment",
          author: "Jane Smith",
          date: "April 11, 2023",
          replies: [
            {
              id: 3,
              content: "This is a reply to the reply to the first comment",
              author: "Bob Johnson",
              date: "April 12, 2023",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      content: "This is the second comment",
      author: "Alice Green",
      date: "April 13, 2023",
      replies: [],
    },
    {
      id: 5,
      content: "This is the third comment",
      author: "Charlie Brown",
      date: "April 14, 2023",
      replies: [
        {
          id: 6,
          content: "This is a reply to the third comment",
          author: "Emily White",
          date: "April 15, 2023",
          replies: [],
        },
        {
          id: 7,
          content: "This is another reply to the third comment",
          author: "Tom Grey",
          date: "April 16, 2023",
          replies: [],
        },
      ],
    },
  ],
};
