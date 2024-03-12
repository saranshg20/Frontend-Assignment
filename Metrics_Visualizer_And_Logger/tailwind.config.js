/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminalHead: "#0E1623",
        terminalBody: "#090F17",
        terminalHeadText: "#82A0CE",
        terminalBodyText: "#A8C3E8",
        terminalTimeStampText: "#5E7BAA",
        terminalSuccessTag: "#2DD4BF",
        terminalErrorText: "#F87171"
      },
    },
  },
  plugins: [],
}