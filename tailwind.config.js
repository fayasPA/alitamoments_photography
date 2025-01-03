/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poiret: ['Poiret One', 'sans-serif'],
        cyfletech: ['Doto', 'sans-serif'],
        quoteFont: ['Italiana', 'sans-serif'],
        commentFont: ['Marck Script', 'sans-serif'],
        
      },
      colors: {
        selGray: {
          DEFAULT: "#525252",
          100: "#252525",
          200: "#141414",
          body: '#18392B',
          light: '#e4e4e480',
        },
        selYellowDark: "#FFFF00",
        selYellow: "#FFFF99",
        selBlue: "#ADD8E6",
        selRedDark: "#FF0000",
        selRed: "#FFB6C1",
        selOrange: "#FFD580",
        selBlack: "#101010",
        selGold:"#D7BF72",
        oldBorderColor: "#ffffff59",
        borderColor: "#908f8f",

        borderColor2: "#ffffffce",
        borderColor3: "#d6d6d6",
        zinc: "#232222",
        // gray: "#555555",
        lineGray: "#656565",
        selWhite: "#F2F1EF",
        selWhite: "#F2F1EF",
        formColor: "#f2f2f2",
        formTextColor: "#0003",
        formDropdownColor: "#0006",

      },
    },
  },
  plugins: [],
}

