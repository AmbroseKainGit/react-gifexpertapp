import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['DBZ']);

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={setCategories} />

      <hr />
      <ol>
        {categories.map(data =>
          <GifGrid
            category={data}
            key={data}
          />
        )}
      </ol>
    </>
  )
}
export default GifExpertApp;
