module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 1, 0.7)), url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3425&q=80')",
      },
    },
  },
  plugins: [],
}