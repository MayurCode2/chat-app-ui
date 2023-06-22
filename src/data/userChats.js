const userChats = [
  {
    id: 1,
    name: "mayur patil",
    photoUrl: "./images/male.png",
    messages: [
      {
        type: "sent",
        content: "Hey! How are you?",
        timestamp: "3:00 PM"
      },
      {
        type: "received",
        content: "Hey! I'm fine! How about you?",
        timestamp: "3:00 PM"
      }
    ]
  },
  {
    id: 2,
    name: "pavan",
    photoUrl: "./images/female.png",
    messages: [
      {
        type: "sent",
        content: "Hey! How are you?",
        timestamp: "6:00 PM"
      },
      {
        type: "received",
        content: "Hey! I'm fine!",
        timestamp: "6:20 PM"
      }
    ]
  },
  {
    id: 3,
    name: "rakeshn",
    photoUrl: "./images/male2.png",
    messages: [
      {
        type: "received",
        content: "Yo! What's up?",
        timestamp: "9:00 AM"
      },
      {
        type: "sent",
        content: "Nothing much. What about you?",
        timestamp: "9:10 AM"
      }
    ]
  }
];

export default userChats;
