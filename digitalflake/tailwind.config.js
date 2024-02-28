/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],


  theme: {
    extend: {
      colors: {
        blueOar: "#717070",
        purplePleasures: "#676767",
        appleLine:"#B1AFAF",
        lime:"#A08CB1",
        wonderPurple:"#5C218B",
        iconic:"#685D5D",
        headColor:"#662671",
        sidebarColor:"#F4F4F4",
        dimYellow:"#FFF8B7",
        oblivionGrey:"#A3A3A3",
        hotShot:"#B13129",
        
      },

      fontFamily: {
        poppins: "Poppins",
        
      },

      fontSize: {
        "4.25xl": "38px" ,
        
      },

      height: {
        12: "48px",
        39.5: "158px",
        237.5: "950px",
        279.25: "1117px",
        

      },

      maxHeight: {
        156: "38.43rem" /* 615px */,
      },

      maxWidth: {
        92.5: "23.125rem" /* 370px */,
      },

      width: {
        75.25: "301px",
        123: "492px",
        195: "780px",
        432: "1728px",
               
      },

      margin: {

        11.25: "45px",
        14.25: "57px",
        26: "104px",
        36:"144px",
        59.75: "239px",
      },

      padding: {
        1.75: "0.438rem" /* 7px */,
        2.75: "0.688rem" /* 11px */,
        3.75: "0.9375rem" /* 15px */,
        8.5: "2.125rem" /* 34px */,
        10.25: "2.5625rem" /* 41px */,
        10.75: "2.6875rem" /* 43px */,
        16.25: "4.125rem" /* 66 */,
        19.5: "4.875rem" /* 78px */,
        35.5: "8.75rem" /* 140px */,
        13.5: "3.375rem" /* 54px */,
        11.25: "2.8125rem" /* 45px */,
        15.5: "3.875rem" /* 62px */,
        3.25: "0.8125rem" /* 13px */,
        2.5: "0.625rem" /* 10px */,
        4.5: "1.125rem" /* 18px */,
        11.5: "2.875rem" /* 46px */,
        21.75: "5.4375rem" /* 87px */,
      },

      borderWidth: {
        5: "0.3125rem" /* 5px */,
        1.5: "0.09375rem" /* 1.5px */,
      },

      borderRadius: {
        "1.5xl": "0.875rem" /* 14px */,
        "24xl": "1.5rem" /* 24px */,
      },

      spacing: {
        0.5: "0.125rem" /* 2px */,
        4.5: " 1.125rem" /* 18px */,
        5.5: "1.375rem" /* 22px */,
        6.25: "1.56rem" /* 25px */,
        7.5: "1.875rem" /* 30px */,
      },
      boxShadow: {
        boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.75)',
        headShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
        dropShadow:'0px 2.83px 7.07px 0px rgba(0, 0, 0, 0.25)',
        
      },
    },
  },

  plugins: [],
};