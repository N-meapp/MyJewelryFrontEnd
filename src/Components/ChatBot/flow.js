
export const flow = {
  start: {
    message: "💍 Welcome to MyJewellery! I'm your virtual assistant. How can I help you today?",
    options: [
      "🔍 Explore Gold Types",
      "💰 Making Charges",
      "♻️ Return Policy",
      "📍 Store Locations",
      "🎁 Current Offers",
      "👤 Talk to Support"
    ],
    path: "main_menu"
  },

  main_menu: {
    message: (params) => {
      const choice = params.userInput;
      switch (choice) {
        case "🔍 Explore Gold Types":
          return `We offer a variety of gold options:

✨ 22KT Yellow Gold – Traditional & pure
✨ 18KT Gold – More durable, ideal for daily wear
✨ White Gold – Elegant & modern look

Would you like help selecting one?`;
        case "💰 Making Charges":
          return `💡 Making charges depend on design complexity and weight.

📊 Typically range from 8% to 25% of the gold value.

Want to check making charges on a specific item?`;
        case "♻️ Return Policy":
          return `🔄 You can return jewelry within 15 days of purchase.

⚠️ Items must be unworn and in original packaging.

Refunds processed within 5-7 working days. Need more help?`;
        case "📍 Store Locations":
          return `📌 We have MyJewellery showrooms in:

• Mumbai
• Delhi
• Bangalore

Visit our website for maps & store timings. Want directions?`;
        case "🎁 Current Offers":
          return `🎉 Current Deals:

💎 20% off on Diamond Jewellery
🎀 Flat ₹500 off on orders above ₹10,000
⏳ Offer valid till: 15th July

Interested in these offers?`;
        case "👤 Talk to Support":
          return `👩‍💼 Connecting you to a customer support agent...

📞 Call: 1800-123-4567
💬 WhatsApp: +91 98765 43210

Response within 2 minutes. Can I assist further?`;
        default:
          return "I didn’t get that. Please select one of the available options.";
      }
    },
    options: ["🏠 Main Menu", "📦 Track Order", "💬 Chat with Agent"],
    path: "secondary_menu"
  },

  secondary_menu: {
    message: (params) => {
      const input = params.userInput;
      switch (input) {
        case "🏠 Main Menu":
          return "You're back to the main menu. What would you like to know?";
        case "📦 Track Order":
          return `📦 Enter your order ID on our website or app to track real-time status.

📬 Updates will also be sent via SMS & email.`;
        case "💬 Chat with Agent":
          return `💬 Please hold on… Connecting you with our team.

⏱️ Typical wait time: under 2 minutes

Or call: 1800-123-4567`;
        default:
          return "Please select one of the available options to proceed.";
      }
    },
    options: ["🏠 Main Menu", "🔄 Start Over"],
    path: "final"
  },

  final: {
    message: (params) => {
      const input = params.userInput;
      if (input === "🏠 Main Menu") {
        return "Welcome back! Let me know what you'd like to explore!";
      } else if (input === "🔄 Start Over") {
        return "🔁 Starting fresh. Welcome to MyJewellery!";
      }
      return "Thanks for chatting with MyJewellery! 💖 Have a lovely day!";
    },
    options: [
      "🔍 Explore Gold Types",
      "💰 Making Charges",
      "♻️ Return Policy",
      "📍 Store Locations",
      "🎁 Current Offers",
      "👤 Talk to Support"
    ],
    path: "main_menu"
  }
};
