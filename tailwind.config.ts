import form from "@tailwindcss/forms";
import typo from "@tailwindcss/typography";
import { type Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          brand: {
            DEFAULT: "#0054DD",
            bright: "#F1F7FF",
            deep: "#004AC2",
            strong: "#00286B",
          },
          danger: {
            bright: "#FFF1ED",
          },
          info: {
            bright: "#EDEFFE",
          },
          main: {
            bright: "#FAFAFA",
            pale: "#E7E8E9",
          },
          secondary: {
            bright: "#F0F7FB",
            pale: "#E4F0F9",
          },
          success: {
            bright: "#F2FDF1",
          },
          warning: {
            bright: "#FCF8F0",
          },
        },
        fg: {
          border: {
            brand: {
              DEFAULT: "#0054DD",
              lc: "#5294FF",
            },
            danger: {
              lc: "#EE806A",
            },
            info: {
              lc: "#7575EC",
            },
            main: {
              DEFAULT: "#CCCED0",
            },
            success: {
              lc: "#81E87F",
            },
            warning: {
              lc: "#E7C377",
            },
          },
          icon: {
            brand: {
              DEFAULT: "#004AC2",
            },
            main: {
              DEFAULT: "#3E4143",
              hover: "#3E4143",
              lc: "#A1A5A8",
            },
          },
          text: {
            brand: {
              DEFAULT: "#0054DD",
              hc: "#001536",
              hover: "#003997",
            },
            danger: {
              DEFAULT: "#DC3A1A",
              deep: "#DC3A1A",
            },
            info: {
              DEFAULT: "#2D0D8F",
            },
            main: {
              DEFAULT: "#535659",
              hc: "#151617",
              lc: "#A1A5A8",
              pressed: "#2B2D2E",
            },
            secondary: {
              hc: "#274656",
              pressed: "#3E708A",
            },
            success: {
              DEFAULT: "#0D8F19",
            },
            warning: {
              DEFAULT: "#8F6B0D",
            },
            "on-main": {
              DEFAULT: "#E7E8E9",
            },
          },
        },
      },
      container: {
        screens: {
          "2xl": "1440px",
        },
      },
      flex: {
        f: "0 0 100%",
      },
      fontFamily: {
        body: ["var(--font-geist-sans)"],
        heading: ["var(--font-bricolage-grotesque)"],
      },
      fontSize: {
        xxs: ["0.625rem", "1rem"],
        "7": ["1.75rem", "2.25rem"],
        "10": ["2.5rem", "3.5rem"],
        "16": ["4rem", "4.75rem"],
      },
      gridTemplateColumns: {
        "16": "repeat(16, minmax(0, 1fr))",
      },
      padding: {
        "30": "7.5rem",
      },
      spacing: {
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "25": "6.25rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "46": "11.5rem",
        "50": "12.5rem",
        "54": "13.5rem",
        "62": "15.5rem",
        "70": "17.5rem",
        "75": "18.75rem",
        "83": "20.75rem",
        "87": "21.75rem",
        "90": "22.5rem",
        "95": "23.75rem",
        "98": "24.5rem",
        "100": "25rem",
        "111": "27.75rem",
        "112": "28rem",
        "115": "28.75rem",
        "125": "31.25rem",
        "130": "32.5rem",
        "145": "36.25rem",
        "150": "37.5rem",
        "160": "40rem",
        "172": "43rem",
        "180": "45rem",
        "210": "52.5rem",
      },
    },
  },
  plugins: [animate, form, typo],
};

export default config;
