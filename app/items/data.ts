export const ITEMS = Array.from({ length: 30 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1} ${["Breaker", "Mixer", "Ladder", "Saw", "Pump"][i % 5]}` }));
