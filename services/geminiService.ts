
// Client-safe fallback for generating messages.
// The original implementation used the @google/genai Node SDK which cannot run in a browser build.
// To avoid runtime failures when deploying a static site, return a short mocked message
// (or use a server-side endpoint in the future to proxy the AI call).

export const generateTeddyMessage = async (userName: string = "Maya"): Promise<string> => {
  const samples = [
    `Hey ${userName}, you're the coolest teddy who stole my heart — always soft, never boring. 🖤💖`,
    `To ${userName}: you're the only one who gets my wild side and my cuddles. Happy Teddy Day!`,
    `Maya, my mischievous teddy — you make even the quiet nights glow. Love you forever.`,
    `You're my favorite kind of trouble, ${userName}. Happy Teddy Day to the one who keeps my heart safe.`,
  ];

  // Simulate a small delay to preserve UX behavior
  await new Promise((res) => setTimeout(res, 700 + Math.random() * 800));
  return samples[Math.floor(Math.random() * samples.length)];
};
