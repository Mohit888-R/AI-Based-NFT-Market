import Nav from "@/components/Headers/headers";

export default function Home() {
  return (
    <div className="">
      <div  style={{ backgroundImage: `url(${'../assets/bgImage.gif'})`, backgroundSize: 'cover' }} className="flex justify-center bg-gray-700 bg-opacity-65">
        <Nav/>
      </div>
    </div>
  );
}
