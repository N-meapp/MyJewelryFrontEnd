export const settings = {
  general: {
    primaryColor: "#d2b48c",
    secondaryColor: "#d2b48c",
    fontFamily: "Poppins, sans-serif",
    backgroundColor:'#000000',
    showFooter: true,
    embedded: false,
  },
  chatHistory: {
    storageKey: "aurafits_chat_history",
  },
  header: {
    title: "My Jewelry",
    showAvatar: true,
    avatar: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png",
  },
  tooltip: {
    mode: "CLOSE", // or "NEVER" to hide tooltip completely
    text: "chat with us", // Tooltip text on hover
  },
  
  notification: {
    disabled: true,
    defaultToggledOn: false,
    alwaysOpen: false,
    showCount: false,
  },
  audio: {
    disabled: true,
    defaultToggledOn: false,
  },
  voice: {
    disabled: true,
  },
  footer: {
    text: "Powered by my jewlery",
  },
  chatInput: {
    placeholder: "Type your message here...", // Change input placeholder
    disabled: false,
    allowNewline: false,
  },
}