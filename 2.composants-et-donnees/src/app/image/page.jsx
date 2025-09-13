import { getImage } from "@/lib/images";

async function page() {
  const img = await getImage();

  return (
    <div>
      <h1>Une image</h1>
      <img src={img.url} alt="" />
    </div>
  );
}

export default page;
