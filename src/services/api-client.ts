import axios from "axios";

export default axios.create({
  baseURL: `https://api.rawg.io/api`,
  params: {
    key: "a43fa41fcc3c45c0968dfe9dd4d0971f",
  },
});
