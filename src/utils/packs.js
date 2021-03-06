import * as config from "../config";

export const packs = {
  [config.DifficultyLevels.EASY]: [
    [
      { type: "prime", value: 7 },
      { type: "prime", value: 5 },
      { value: 29, type: "prime" },
      { value: 17, type: "prime" },
      { value: 11, type: "prime" },
      { value: 12, type: "expression", expression: "2 × 6" },
      { type: "value", value: 12 },
      { expression: "3 × 2", value: 6, type: "expression" },
      { type: "value", value: 6 },
      { value: 24, type: "expression", expression: "4 × 6" },
      { value: 24, type: "value" },
      { value: 10, expression: "5 × 2", type: "expression" },
      { value: 10, type: "value" },
      { expression: "2 × 5", value: 10, type: "expression" },
      { value: 10, type: "value" },
      { value: 15, type: "expression", expression: "3 × 5" },
      { type: "value", value: 15 },
      { type: "expression", value: 24, expression: "6 × 4" },
      { value: 24, type: "value" },
      { value: 18, type: "expression", expression: "3 × 6" },
      { type: "value", value: 18 },
      { type: "expression", value: 25, expression: "5 × 5" },
      { value: 25, type: "value" },
      { value: 15, expression: "3 × 5", type: "expression" },
      { value: 15, type: "value" }
    ],
    [
      { value: 19, type: "prime" },
      { value: 7, type: "prime" },
      { type: "prime", value: 23 },
      { value: 29, type: "prime" },
      { value: 11, type: "prime" },
      { value: 8, expression: "4 × 2", type: "expression" },
      { type: "value", value: 8 },
      { type: "expression", value: 12, expression: "6 × 2" },
      { value: 12, type: "value" },
      { value: 24, expression: "6 × 4", type: "expression" },
      { type: "value", value: 24 },
      { value: 18, expression: "6 × 3", type: "expression" },
      { type: "value", value: 18 },
      { value: 9, type: "expression", expression: "3 × 3" },
      { value: 9, type: "value" },
      { type: "expression", value: 6, expression: "3 × 2" },
      { type: "value", value: 6 },
      { type: "expression", value: 18, expression: "3 × 6" },
      { type: "value", value: 18 },
      { type: "expression", value: 20, expression: "4 × 5" },
      { type: "value", value: 20 },
      { value: 20, expression: "4 × 5", type: "expression" },
      { value: 20, type: "value" },
      { value: 6, type: "expression", expression: "2 × 3" },
      { type: "value", value: 6 }
    ],
    [
      { type: "prime", value: 13 },
      { type: "prime", value: 7 },
      { type: "prime", value: 11 },
      { type: "prime", value: 19 },
      { value: 11, type: "prime" },
      { value: 18, expression: "3 × 6", type: "expression" },
      { type: "value", value: 18 },
      { value: 20, type: "expression", expression: "5 × 4" },
      { value: 20, type: "value" },
      { type: "expression", value: 4, expression: "2 × 2" },
      { value: 4, type: "value" },
      { value: 12, expression: "3 × 4", type: "expression" },
      { type: "value", value: 12 },
      { type: "expression", value: 36, expression: "6 × 6" },
      { type: "value", value: 36 },
      { value: 36, type: "expression", expression: "6 × 6" },
      { type: "value", value: 36 },
      { value: 16, type: "expression", expression: "4 × 4" },
      { type: "value", value: 16 },
      { value: 20, expression: "4 × 5", type: "expression" },
      { type: "value", value: 20 },
      { expression: "2 × 5", value: 10, type: "expression" },
      { value: 10, type: "value" },
      { value: 20, type: "expression", expression: "4 × 5" },
      { value: 20, type: "value" }
    ],
    [
      { type: "prime", value: 19 },
      { value: 17, type: "prime" },
      { value: 29, type: "prime" },
      { type: "prime", value: 13 },
      { type: "prime", value: 7 },
      { type: "expression", value: 24, expression: "6 × 4" },
      { type: "value", value: 24 },
      { value: 10, type: "expression", expression: "2 × 5" },
      { type: "value", value: 10 },
      { value: 30, type: "expression", expression: "5 × 6" },
      { type: "value", value: 30 },
      { expression: "2 × 3", value: 6, type: "expression" },
      { value: 6, type: "value" },
      { value: 12, expression: "4 × 3", type: "expression" },
      { value: 12, type: "value" },
      { type: "expression", value: 30, expression: "6 × 5" },
      { type: "value", value: 30 },
      { value: 16, type: "expression", expression: "4 × 4" },
      { type: "value", value: 16 },
      { value: 12, expression: "2 × 6", type: "expression" },
      { type: "value", value: 12 },
      { type: "expression", value: 12, expression: "6 × 2" },
      { type: "value", value: 12 },
      { expression: "4 × 2", value: 8, type: "expression" },
      { value: 8, type: "value" }
    ],
    [
      { value: 5, type: "prime" },
      { value: 17, type: "prime" },
      { type: "prime", value: 23 },
      { value: 11, type: "prime" },
      { value: 7, type: "prime" },
      { value: 10, type: "expression", expression: "5 × 2" },
      { type: "value", value: 10 },
      { expression: "2 × 6", value: 12, type: "expression" },
      { value: 12, type: "value" },
      { expression: "2 × 5", value: 10, type: "expression" },
      { type: "value", value: 10 },
      { value: 24, expression: "6 × 4", type: "expression" },
      { value: 24, type: "value" },
      { type: "expression", value: 12, expression: "2 × 6" },
      { value: 12, type: "value" },
      { type: "expression", value: 36, expression: "6 × 6" },
      { value: 36, type: "value" },
      { type: "expression", value: 30, expression: "6 × 5" },
      { value: 30, type: "value" },
      { expression: "6 × 5", value: 30, type: "expression" },
      { type: "value", value: 30 },
      { value: 4, expression: "2 × 2", type: "expression" },
      { type: "value", value: 4 },
      { value: 15, expression: "5 × 3", type: "expression" },
      { value: 15, type: "value" }
    ]
  ],
  [config.DifficultyLevels.MEDIUM]: [
    [
      { type: "prime", value: 29 },
      { value: 41, type: "prime" },
      { type: "prime", value: 43 },
      { type: "prime", value: 37 },
      { type: "prime", value: 23 },
      { expression: "5 × 4", value: 20, type: "expression" },
      { value: 20, type: "value" },
      { type: "expression", value: 16, expression: "4 × 4" },
      { type: "value", value: 16 },
      { value: 48, expression: "8 × 6", type: "expression" },
      { type: "value", value: 48 },
      { value: 28, type: "expression", expression: "7 × 4" },
      { type: "value", value: 28 },
      { type: "expression", value: 28, expression: "7 × 4" },
      { type: "value", value: 28 },
      { type: "expression", value: 24, expression: "6 × 4" },
      { type: "value", value: 24 },
      { value: 35, type: "expression", expression: "5 × 7" },
      { value: 35, type: "value" },
      { value: 40, expression: "5 × 8", type: "expression" },
      { type: "value", value: 40 },
      { expression: "8 × 6", value: 48, type: "expression" },
      { value: 48, type: "value" },
      { value: 20, type: "expression", expression: "4 × 5" },
      { value: 20, type: "value" }
    ],
    [
      { type: "prime", value: 37 },
      { value: 23, type: "prime" },
      { value: 41, type: "prime" },
      { value: 43, type: "prime" },
      { value: 29, type: "prime" },
      { value: 30, type: "expression", expression: "5 × 6" },
      { type: "value", value: 30 },
      { expression: "6 × 7", value: 42, type: "expression" },
      { value: 42, type: "value" },
      { expression: "8 × 6", value: 48, type: "expression" },
      { value: 48, type: "value" },
      { value: 30, expression: "5 × 6", type: "expression" },
      { value: 30, type: "value" },
      { value: 35, expression: "7 × 5", type: "expression" },
      { type: "value", value: 35 },
      { expression: "7 × 4", value: 28, type: "expression" },
      { type: "value", value: 28 },
      { value: 20, type: "expression", expression: "5 × 4" },
      { value: 20, type: "value" },
      { expression: "8 × 5", value: 40, type: "expression" },
      { type: "value", value: 40 },
      { value: 42, expression: "7 × 6", type: "expression" },
      { value: 42, type: "value" },
      { type: "expression", value: 30, expression: "6 × 5" },
      { type: "value", value: 30 }
    ],
    [
      { type: "prime", value: 37 },
      { type: "prime", value: 29 },
      { type: "prime", value: 43 },
      { value: 47, type: "prime" },
      { value: 41, type: "prime" },
      { value: 64, expression: "8 × 8", type: "expression" },
      { value: 64, type: "value" },
      { expression: "7 × 6", value: 42, type: "expression" },
      { type: "value", value: 42 },
      { expression: "5 × 8", value: 40, type: "expression" },
      { value: 40, type: "value" },
      { expression: "4 × 5", value: 20, type: "expression" },
      { value: 20, type: "value" },
      { value: 30, type: "expression", expression: "5 × 6" },
      { value: 30, type: "value" },
      { expression: "8 × 4", value: 32, type: "expression" },
      { value: 32, type: "value" },
      { type: "expression", value: 64, expression: "8 × 8" },
      { value: 64, type: "value" },
      { expression: "6 × 8", value: 48, type: "expression" },
      { value: 48, type: "value" },
      { type: "expression", value: 36, expression: "6 × 6" },
      { value: 36, type: "value" },
      { value: 40, expression: "8 × 5", type: "expression" },
      { value: 40, type: "value" }
    ],
    [
      { type: "prime", value: 47 },
      { type: "prime", value: 41 },
      { type: "prime", value: 31 },
      { type: "prime", value: 43 },
      { type: "prime", value: 37 },
      { expression: "8 × 6", value: 48, type: "expression" },
      { type: "value", value: 48 },
      { type: "expression", value: 32, expression: "4 × 8" },
      { value: 32, type: "value" },
      { value: 40, type: "expression", expression: "8 × 5" },
      { type: "value", value: 40 },
      { expression: "8 × 7", value: 56, type: "expression" },
      { value: 56, type: "value" },
      { value: 24, type: "expression", expression: "6 × 4" },
      { value: 24, type: "value" },
      { value: 40, expression: "8 × 5", type: "expression" },
      { value: 40, type: "value" },
      { value: 40, expression: "8 × 5", type: "expression" },
      { type: "value", value: 40 },
      { value: 56, type: "expression", expression: "7 × 8" },
      { value: 56, type: "value" },
      { value: 24, expression: "4 × 6", type: "expression" },
      { type: "value", value: 24 },
      { value: 32, expression: "8 × 4", type: "expression" },
      { type: "value", value: 32 }
    ],
    [
      { type: "prime", value: 41 },
      { type: "prime", value: 23 },
      { type: "prime", value: 29 },
      { type: "prime", value: 43 },
      { value: 31, type: "prime" },
      { value: 48, type: "expression", expression: "6 × 8" },
      { value: 48, type: "value" },
      { expression: "5 × 4", value: 20, type: "expression" },
      { type: "value", value: 20 },
      { value: 36, expression: "6 × 6", type: "expression" },
      { value: 36, type: "value" },
      { expression: "5 × 7", value: 35, type: "expression" },
      { type: "value", value: 35 },
      { expression: "7 × 8", value: 56, type: "expression" },
      { value: 56, type: "value" },
      { expression: "7 × 6", value: 42, type: "expression" },
      { value: 42, type: "value" },
      { value: 56, type: "expression", expression: "7 × 8" },
      { value: 56, type: "value" },
      { value: 48, expression: "6 × 8", type: "expression" },
      { type: "value", value: 48 },
      { expression: "6 × 7", value: 42, type: "expression" },
      { type: "value", value: 42 },
      { value: 30, expression: "6 × 5", type: "expression" },
      { value: 30, type: "value" }
    ]
  ],
  [config.DifficultyLevels.HARD]: [
    [
      { value: 61, type: "prime" },
      { value: 79, type: "prime" },
      { value: 59, type: "prime" },
      { value: 89, type: "prime" },
      { type: "prime", value: 67 },
      { type: "expression", value: 72, expression: "6 × 12" },
      { value: 72, type: "value" },
      { expression: "9 × 12", value: 108, type: "expression" },
      { value: 108, type: "value" },
      { value: 72, type: "expression", expression: "12 × 6" },
      { type: "value", value: 72 },
      { value: 80, type: "expression", expression: "8 × 10" },
      { type: "value", value: 80 },
      { type: "expression", value: 49, expression: "7 × 7" },
      { value: 49, type: "value" },
      { type: "expression", value: 99, expression: "11 × 9" },
      { value: 99, type: "value" },
      { value: 120, expression: "10 × 12", type: "expression" },
      { value: 120, type: "value" },
      { expression: "9 × 9", value: 81, type: "expression" },
      { type: "value", value: 81 },
      { value: 66, type: "expression", expression: "11 × 6" },
      { type: "value", value: 66 },
      { expression: "12 × 11", value: 132, type: "expression" },
      { type: "value", value: 132 }
    ],
    [
      { type: "prime", value: 71 },
      { type: "prime", value: 61 },
      { type: "prime", value: 79 },
      { type: "prime", value: 47 },
      { type: "prime", value: 83 },
      { expression: "8 × 8", value: 64, type: "expression" },
      { value: 64, type: "value" },
      { value: 90, type: "expression", expression: "9 × 10" },
      { type: "value", value: 90 },
      { value: 88, type: "expression", expression: "8 × 11" },
      { type: "value", value: 88 },
      { expression: "7 × 12", value: 84, type: "expression" },
      { value: 84, type: "value" },
      { expression: "6 × 10", value: 60, type: "expression" },
      { value: 60, type: "value" },
      { type: "expression", value: 54, expression: "6 × 9" },
      { value: 54, type: "value" },
      { expression: "12 × 11", value: 132, type: "expression" },
      { type: "value", value: 132 },
      { type: "expression", value: 88, expression: "8 × 11" },
      { value: 88, type: "value" },
      { value: 81, expression: "9 × 9", type: "expression" },
      { value: 81, type: "value" },
      { type: "expression", value: 48, expression: "6 × 8" },
      { type: "value", value: 48 }
    ],
    [
      { type: "prime", value: 79 },
      { type: "prime", value: 71 },
      { value: 73, type: "prime" },
      { type: "prime", value: 59 },
      { value: 97, type: "prime" },
      { value: 88, expression: "8 × 11", type: "expression" },
      { type: "value", value: 88 },
      { value: 72, expression: "6 × 12", type: "expression" },
      { value: 72, type: "value" },
      { expression: "11 × 12", value: 132, type: "expression" },
      { value: 132, type: "value" },
      { value: 144, type: "expression", expression: "12 × 12" },
      { type: "value", value: 144 },
      { type: "expression", value: 48, expression: "6 × 8" },
      { type: "value", value: 48 },
      { value: 120, expression: "12 × 10", type: "expression" },
      { type: "value", value: 120 },
      { expression: "6 × 10", value: 60, type: "expression" },
      { type: "value", value: 60 },
      { value: 48, expression: "8 × 6", type: "expression" },
      { type: "value", value: 48 },
      { type: "expression", value: 60, expression: "10 × 6" },
      { value: 60, type: "value" },
      { value: 42, expression: "6 × 7", type: "expression" },
      { value: 42, type: "value" }
    ],
    [
      { value: 59, type: "prime" },
      { value: 67, type: "prime" },
      { type: "prime", value: 61 },
      { type: "prime", value: 71 },
      { value: 73, type: "prime" },
      { value: 81, expression: "9 × 9", type: "expression" },
      { type: "value", value: 81 },
      { expression: "10 × 11", value: 110, type: "expression" },
      { value: 110, type: "value" },
      { expression: "12 × 6", value: 72, type: "expression" },
      { type: "value", value: 72 },
      { value: 132, type: "expression", expression: "11 × 12" },
      { value: 132, type: "value" },
      { expression: "9 × 9", value: 81, type: "expression" },
      { type: "value", value: 81 },
      { value: 60, type: "expression", expression: "6 × 10" },
      { value: 60, type: "value" },
      { value: 64, type: "expression", expression: "8 × 8" },
      { value: 64, type: "value" },
      { expression: "6 × 11", value: 66, type: "expression" },
      { value: 66, type: "value" },
      { expression: "8 × 12", value: 96, type: "expression" },
      { type: "value", value: 96 },
      { expression: "7 × 6", value: 42, type: "expression" },
      { value: 42, type: "value" }
    ],
    [
      { value: 47, type: "prime" },
      { value: 79, type: "prime" },
      { value: 67, type: "prime" },
      { type: "prime", value: 59 },
      { value: 89, type: "prime" },
      { value: 42, expression: "7 × 6", type: "expression" },
      { value: 42, type: "value" },
      { type: "expression", value: 66, expression: "6 × 11" },
      { type: "value", value: 66 },
      { value: 60, type: "expression", expression: "10 × 6" },
      { value: 60, type: "value" },
      { value: 77, expression: "11 × 7", type: "expression" },
      { type: "value", value: 77 },
      { value: 66, type: "expression", expression: "6 × 11" },
      { type: "value", value: 66 },
      { value: 84, type: "expression", expression: "12 × 7" },
      { type: "value", value: 84 },
      { type: "expression", value: 81, expression: "9 × 9" },
      { type: "value", value: 81 },
      { expression: "10 × 7", value: 70, type: "expression" },
      { value: 70, type: "value" },
      { expression: "6 × 9", value: 54, type: "expression" },
      { type: "value", value: 54 },
      { value: 84, type: "expression", expression: "12 × 7" },
      { value: 84, type: "value" }
    ]
  ]
};
